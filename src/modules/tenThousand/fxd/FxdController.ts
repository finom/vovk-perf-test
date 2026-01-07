import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxd")
export default class FxdController {
  @operation({
    summary: "Get Fxd",
  })
  @get()
  static getFxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxd",
  })
  @post("{id}")
  static createFxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
