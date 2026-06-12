// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  outputConfig: {
    imports: {
      validateOnClient: "vovk-ajv",
    },
  },
  moduleTemplates: {
    controller: "./module-templates/controller.ts.ejs",
  },
};
export default config;
