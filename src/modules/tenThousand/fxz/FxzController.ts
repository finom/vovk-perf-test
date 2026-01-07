import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxz")
export default class FxzController {
  @operation({
    summary: "Get Fxz",
  })
  @get()
  static getFxz = procedure({
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
