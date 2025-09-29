// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  generatorConfig: {
    imports: {
      validateOnClient: "vovk-ajv",
    },
  },
  moduleTemplates: {
    controller: "./module-templates/controller.ts.ejs",
  },
};
export default config;
