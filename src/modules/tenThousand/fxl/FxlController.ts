import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxl")
export default class FxlController {
  @operation({
    summary: "Get Fxl",
  })
  @get()
  static getFxl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxl",
  })
  @post("{id}")
  static createFxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
