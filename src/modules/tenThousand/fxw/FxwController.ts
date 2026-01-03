import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxws")
export default class FxwController {
  @operation({
    summary: "Get Fxws",
  })
  @get()
  static getFxws = procedure({
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
