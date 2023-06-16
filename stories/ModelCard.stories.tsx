import ModelCard from "../app/ModelCard";

export default {
  title: "Components/ModelCard",
  component: ModelCard,
  args: {
    tune: true
  }
};

export const ModelCardStory = () => <ModelCard id="davinci" organization="openai" tune base="davinci" />
