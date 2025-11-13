import { GoogleGenAI, Type } from "@google/genai";
import { ClassificationResult, AppType, Orientation } from '../types';

const fileToGenerativePart = async (file: File) => {
  const base64encodedData = await new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: {
      data: base64encodedData,
      mimeType: file.type,
    },
  };
};

export const classifyScreenshot = async (imageFile: File): Promise<ClassificationResult> => {
  // FIX: Removed unnecessary API key check, assuming it's always present in the environment as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const imagePart = await fileToGenerativePart(imageFile);

  const prompt = `Analyze this image. Is it a screenshot from WhatsApp, Facebook Messenger, or something else? Look for a prominent green header bar for WhatsApp or a prominent blue/purple gradient header bar for Facebook Messenger. Also, determine if the image orientation is portrait or landscape. Respond ONLY with a JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [
          imagePart,
          { text: prompt },
        ]
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            app: {
              type: Type.STRING,
              enum: [AppType.WhatsApp, AppType.Messenger, AppType.Other],
              description: "The detected application."
            },
            orientation: {
              type: Type.STRING,
              enum: [Orientation.Portrait, Orientation.Landscape],
              description: "The orientation of the screenshot."
            }
          },
          required: ["app", "orientation"]
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText) as ClassificationResult;
    return result;
  } catch (error) {
    console.error("Error classifying screenshot:", error);
    // Return 'Other' as a fallback on error
    return {
      app: AppType.Other,
      orientation: Orientation.Portrait,
    };
  }
};
