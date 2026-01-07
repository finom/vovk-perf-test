import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxf")
export default class FxfController {
  @operation({
    summary: "Get Fxf",
  })
  @get()
  static getFxf = procedure({
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
