import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxzs")
export default class FxzController {
  @operation({
    summary: "Get Fxzs",
  })
  @get()
  static getFxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxz",
  })
  @post("{id}")
  static createFxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
