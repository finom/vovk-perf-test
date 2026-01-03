import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxfs")
export default class FxfController {
  @operation({
    summary: "Get Fxfs",
  })
  @get()
  static getFxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxf",
  })
  @post("{id}")
  static createFxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
