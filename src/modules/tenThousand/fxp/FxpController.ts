import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxps")
export default class FxpController {
  @operation({
    summary: "Get Fxps",
  })
  @get()
  static getFxps = procedure({
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
