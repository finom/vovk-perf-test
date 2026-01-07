import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbm")
export default class CbmController {
  @operation({
    summary: "Get Cbm",
  })
  @get()
  static getCbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbm",
  })
  @post("{id}")
  static createCbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
