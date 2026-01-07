import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxh")
export default class FxhController {
  @operation({
    summary: "Get Fxh",
  })
  @get()
  static getFxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxh",
  })
  @post("{id}")
  static createFxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
