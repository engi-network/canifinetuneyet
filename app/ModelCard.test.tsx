import { StorybookTest } from '@engi.network/design-matcher/plugin/types';

const modelCardDesignTest: StorybookTest = {
  component: 'M',
  story: 'M',
  design: 'app/ModelCardDesign.png',
  args: {
    tune: true
  }
};

test('rendered <ModelCard> should match Figma design', async () => {
  await expect(modelCardDesignTest).toMatchDesign();
});

const modelCardWOrgDesignTest: StorybookTest = {
  component: 'M',
  story: 'MO',
  design: 'app/ModelCardDesignWOrg.png',
  args: {
    tune: true,
    organization: 'openai'
  }
};

test('rendered <ModelCard organization={\'OpenAI\'}> should match Figma design', async () => {
  await expect(modelCardWOrgDesignTest).toMatchDesign();
});
