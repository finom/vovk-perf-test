import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggb")
export default class GgbController {
  @operation({
    summary: "Get Ggb",
  })
  @get()
  static getGgb = procedure({
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
