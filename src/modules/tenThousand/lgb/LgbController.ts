import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgbs")
export default class LgbController {
  @operation({
    summary: "Get Lgbs",
  })
  @get()
  static getLgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgb",
  })
  @post("{id}")
  static createLgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
