import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezu")
export default class EzuController {
  @operation({
    summary: "Get Ezu",
  })
  @get()
  static getEzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezu",
  })
  @post("{id}")
  static createEzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
