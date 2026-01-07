import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxp")
export default class FxpController {
  @operation({
    summary: "Get Fxp",
  })
  @get()
  static getFxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxp",
  })
  @post("{id}")
  static createFxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
