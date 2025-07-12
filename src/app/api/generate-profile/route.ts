import { GeminiProvider } from '@/utils/gemini-provider';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { websiteUrl, serviceLines } = await request.json();

    if (!websiteUrl) {
      return NextResponse.json(
        { error: 'Website URL is required' },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      new URL(websiteUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Create AI provider instance
    const aiProvider = new GeminiProvider({
      apiKey: process.env.GOOGLE_AI_API_KEY || '',
      model: 'gemini-1.5-flash'
    });

    // Generate profile with optional service lines
    const profile = await aiProvider.generateProfile(websiteUrl, serviceLines);

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error in generate-profile API:', error);
    return NextResponse.json(
      { error: 'Failed to generate profile' },
      { status: 500 }
    );
  }
}
