import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxks")
export default class FxkController {
  @operation({
    summary: "Get Fxks",
  })
  @get()
  static getFxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxk",
  })
  @post("{id}")
  static createFxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
