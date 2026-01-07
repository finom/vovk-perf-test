import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgb")
export default class HgbController {
  @operation({
    summary: "Get Hgb",
  })
  @get()
  static getHgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgb",
  })
  @post("{id}")
  static createHgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
