import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esvs")
export default class EsvController {
  @operation({
    summary: "Get Esvs",
  })
  @get()
  static getEsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esv",
  })
  @post("{id}")
  static createEsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
