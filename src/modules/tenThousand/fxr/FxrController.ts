import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxrs")
export default class FxrController {
  @operation({
    summary: "Get Fxrs",
  })
  @get()
  static getFxrs = procedure({
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
