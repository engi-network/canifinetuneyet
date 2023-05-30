import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai'

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

// uploaded from my local ~/Developer/Sandbox/fine-tune-example.jsonl
// which is a few prompts about Engi's architecture
const FINE_TUNE_PREPARED_DATA = "file-Qc0NMCZkOl0OU0jFOZm3cnnR"

// validate whether a model can be fine-tuned
// clean-up if tunning job was successfully started
const canFineTune = async (model: string) => {
  try {
    const fineTune = await openai.createFineTune({
      training_file: FINE_TUNE_PREPARED_DATA,
      model
    });

    await openai.cancelFineTune(fineTune.data.id)

    return true
  } catch (err) {
    console.log(`Could not fine-tune ${model}`, (err as any).response.data.error.message);
    return false
  }
}
 
export async function GET() {
  const res = await fetch('https://api.openai.com/v1/models', {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
  });

  const data = await res.json() as { data: OpenAIModel[] };

  // filter out models created by the api key's account (such as fine-tuned models)
  const openAIModels = data.data.filter(model => model.owned_by === "openai")

  const fineTuneableModels = (await Promise.all(openAIModels.map(({ id, root: base }) => (async () => {
      return {
        id,
        tune: await canFineTune(id),
        base,
        organization: 'openai' // TODO: support multiple LLMs!
      } as Model
    })()
  ))).sort(({ tune }) => Number(tune) ? -1 : 1)
 
  return NextResponse.json(fineTuneableModels);
}
