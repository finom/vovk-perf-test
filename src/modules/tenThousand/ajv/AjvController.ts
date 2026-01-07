import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajv")
export default class AjvController {
  @operation({
    summary: "Get Ajv",
  })
  @get()
  static getAjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajv",
  })
  @post("{id}")
  static createAjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
