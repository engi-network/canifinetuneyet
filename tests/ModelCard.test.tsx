import { StorybookTest } from '@engi.network/design-matcher/plugin/types';

const modelCardDesignTest: StorybookTest = {
  component: 'ModelCard',
  story: 'Model Card Story',
  design: 'ModelCardDesign.png',
  args: {
    tune: true
  }
};

test('rendered <ModelCard> should match Figma design', async () => {
  await expect(modelCardDesignTest).toMatchDesign();
});
