import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxr")
export default class FxrController {
  @operation({
    summary: "Get Fxr",
  })
  @get()
  static getFxr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxr",
  })
  @post("{id}")
  static createFxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
