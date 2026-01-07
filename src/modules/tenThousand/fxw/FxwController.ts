import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxw")
export default class FxwController {
  @operation({
    summary: "Get Fxw",
  })
  @get()
  static getFxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxw",
  })
  @post("{id}")
  static createFxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
