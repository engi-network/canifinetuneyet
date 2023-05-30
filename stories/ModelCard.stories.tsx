import ModelCard from "../app/ModelCard";

export default {
  title: "Components/ModelCard",
  component: ModelCard,
};

export const ModelCardStory = () => <ModelCard id="davinci" organization="openai" tune base="davinci" />
