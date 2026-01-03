import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgbs")
export default class FgbController {
  @operation({
    summary: "Get Fgbs",
  })
  @get()
  static getFgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgb",
  })
  @post("{id}")
  static createFgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
