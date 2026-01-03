import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egbs")
export default class EgbController {
  @operation({
    summary: "Get Egbs",
  })
  @get()
  static getEgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egb",
  })
  @post("{id}")
  static createEgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
