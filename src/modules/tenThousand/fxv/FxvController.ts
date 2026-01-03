import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxvs")
export default class FxvController {
  @operation({
    summary: "Get Fxvs",
  })
  @get()
  static getFxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxv",
  })
  @post("{id}")
  static createFxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
