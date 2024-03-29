import ModelCard from "../app/ModelCard";

export default {
  title: "M",
  component: ModelCard,
  args: {
    tune: true
  }
};

export const M = () => <ModelCard id="davinci" tune base="davinci" />

export const MO = () => <ModelCard id="davinci" organization="openai" tune base="davinci" />
