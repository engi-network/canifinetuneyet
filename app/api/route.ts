import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = await fetch('https://api.openai.com/v1/models', {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
  });

  const data = await res.json();

  const openAIModels = data.data.filter(model => model.owned_by === "openai")
 
  return NextResponse.json(openAIModels);
}
