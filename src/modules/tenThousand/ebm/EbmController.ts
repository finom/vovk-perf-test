import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebm")
export default class EbmController {
  @operation({
    summary: "Get Ebm",
  })
  @get()
  static getEbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebm",
  })
  @post("{id}")
  static createEbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
