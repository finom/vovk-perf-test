import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxgs")
export default class FxgController {
  @operation({
    summary: "Get Fxgs",
  })
  @get()
  static getFxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxg",
  })
  @post("{id}")
  static createFxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
