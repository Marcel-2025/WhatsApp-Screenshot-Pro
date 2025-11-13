import React, { useState, useCallback, useMemo } from 'react';
import { classifyScreenshot } from '../services/geminiService';
import { ProcessedFile, AppType, Orientation } from '../types';

const MAX_CONCURRENT_REQUESTS = 5;

const FileProcessor: React.FC = () => {
  const [files, setFiles] = useState<ProcessedFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [processedCount, setProcessedCount] = useState(0);
  const [isLicensed, setIsLicensed] = useState(false);
  const [activeTab, setActiveTab] = useState<AppType>(AppType.WhatsApp);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles: ProcessedFile[] = Array.from(selectedFiles)
        .filter(file => file.type.startsWith('image/'))
        .map(file => ({
            id: `${file.name}-${file.lastModified}`,
            file,
            previewUrl: URL.createObjectURL(file),
            classification: null,
        }));
      setFiles(newFiles);
      setProcessedCount(0);
    }
  };

  const processFiles = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setProcessedCount(0);

    const filesToProcess = [...files];
    let running = 0;
    let index = 0;
    
    const run = async () => {
        if(index >= filesToProcess.length) {
            if (running === 0) {
                setProcessing(false);
            }
            return;
        }

        while (running < MAX_CONCURRENT_REQUESTS && index < filesToProcess.length) {
            running++;
            const fileIndex = index++;
            const currentFile = filesToProcess[fileIndex];

            classifyScreenshot(currentFile.file)
                .then(classification => {
                    setFiles(prev => prev.map(f => f.id === currentFile.id ? { ...f, classification } : f));
                })
                .catch(error => {
                    console.error(`Failed to process ${currentFile.file.name}:`, error);
                    setFiles(prev => prev.map(f => f.id === currentFile.id ? { ...f, error: 'Failed to classify' } : f));
                })
                .finally(() => {
                    running--;
                    setProcessedCount(prev => prev + 1);
                    run();
                });
        }
    }
    
    run();
  }, [files]);
  
  const filteredFiles = useMemo(() => {
      return files.filter(f => f.classification?.app === activeTab);
  }, [files, activeTab]);

  const counts = useMemo(() => {
      return files.reduce((acc, file) => {
          if(file.classification) {
              acc[file.classification.app] = (acc[file.classification.app] || 0) + 1;
          }
          return acc;
      }, {} as Record<AppType, number>)
  }, [files]);

  const renderContent = () => {
    if (processing) {
      return (
        <div className="flex flex-col items-center justify-center h-64">
          <svg className="animate-spin h-10 w-10 text-[var(--brand)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 font-semibold">Analysiere Bilder...</p>
          <p className="text-sm text-[color-mix(in_oklab,var(--text),transparent_40%)]">{processedCount} / {files.length}</p>
        </div>
      );
    }

    if (files.length > 0 && processedCount === files.length) {
      return (
          <div>
            <div className="border-b border-black/10 dark:border-white/10 p-2 flex gap-2">
                {(Object.keys(AppType) as Array<keyof typeof AppType>).map(key => (
                    <button 
                        key={key}
                        onClick={() => setActiveTab(AppType[key])}
                        className={`px-3 py-1.5 text-sm font-semibold rounded-lg ${activeTab === AppType[key] ? 'bg-[var(--brand)] text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                        {AppType[key]} <span className="text-xs opacity-70">{counts[AppType[key]] || 0}</span>
                    </button>
                ))}
            </div>
            <div className="p-4 h-64 overflow-y-auto">
                {filteredFiles.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {filteredFiles.map(file => (
                            <div key={file.id} className="relative group">
                                <img src={file.previewUrl} alt={file.file.name} className="aspect-square w-full h-full object-cover rounded-lg"/>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                    <p className="text-white text-xs text-center p-1">{file.classification?.orientation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-center">
                        <p className="text-sm text-[color-mix(in_oklab,var(--text),transparent_40%)]">Keine Screenshots für<br/>"{activeTab}" gefunden.</p>
                    </div>
                )}
            </div>
            <div className="p-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <button 
                    onClick={() => { alert(isLicensed ? 'Änderungen angewendet!' : 'Bitte erwerben Sie eine Lizenz.')}}
                    disabled={!isLicensed}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--brand)] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Änderungen anwenden
                </button>
                <div className="flex items-center gap-2">
                    <label htmlFor="license-toggle" className="text-sm font-medium">Lizenz aktiv</label>
                    <input 
                        type="checkbox"
                        id="license-toggle"
                        checked={isLicensed}
                        onChange={(e) => setIsLicensed(e.target.checked)}
                        className="h-4 w-8 appearance-none rounded-full bg-gray-300 dark:bg-gray-600 checked:bg-[var(--brand)] transition-colors duration-200 ease-in-out relative cursor-pointer"
                        // FIX: Cast style object to React.CSSProperties to allow custom CSS properties and fix TypeScript error.
                        style={{'--tw-ring-offset-shadow': '0 0 #0000', '--tw-ring-shadow': '0 0 #0000', 'boxShadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'} as React.CSSProperties}
                    />
                </div>
            </div>
          </div>
      );
    }

    return (
      <div className="p-6">
        <label htmlFor="file-upload" className="cursor-pointer w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="mt-2 text-sm font-semibold text-[var(--text)]">Bilder auswählen</span>
            <span className="text-xs text-[color-mix(in_oklab,var(--text),transparent_40%)]">oder hierher ziehen</span>
            <input id="file-upload" type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
        <button
            onClick={processFiles}
            disabled={files.length === 0}
            className="w-full mt-4 px-4 py-3 text-base font-semibold rounded-lg bg-[var(--brand)] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
           Vorschau starten ({files.length} Bilder)
        </button>
      </div>
    );
  };

  return <div className="bg-[var(--subtle)] rounded-2xl min-h-[300px]">{renderContent()}</div>;
};

export default FileProcessor;
