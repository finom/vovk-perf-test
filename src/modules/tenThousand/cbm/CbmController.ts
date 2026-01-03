import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbms")
export default class CbmController {
  @operation({
    summary: "Get Cbms",
  })
  @get()
  static getCbms = procedure({
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
