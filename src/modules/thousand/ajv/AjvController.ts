import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajv")
export default class AjvController {
  @operation({
    summary: "Get Ajv",
  })
  @get()
  static getAjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajv",
  })
  @post("{id}")
  static createAjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
