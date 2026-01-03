import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxms")
export default class FxmController {
  @operation({
    summary: "Get Fxms",
  })
  @get()
  static getFxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxm",
  })
  @post("{id}")
  static createFxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
