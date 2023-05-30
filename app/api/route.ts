import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = await fetch('https://api.openai.com/v1/models', {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
  });

  const data = await res.json() as { data: Model[] };

  const openAIModels = data.data.filter(model => model.owned_by === "openai").sort(({ permission }) => Number(permission[0].allow_fine_tuning) ? -1 : 1)
 
  return NextResponse.json(openAIModels);
}
