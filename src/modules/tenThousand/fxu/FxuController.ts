import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxus")
export default class FxuController {
  @operation({
    summary: "Get Fxus",
  })
  @get()
  static getFxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxu",
  })
  @post("{id}")
  static createFxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
