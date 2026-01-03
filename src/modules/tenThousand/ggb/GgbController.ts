import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggbs")
export default class GgbController {
  @operation({
    summary: "Get Ggbs",
  })
  @get()
  static getGgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggb",
  })
  @post("{id}")
  static createGgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
