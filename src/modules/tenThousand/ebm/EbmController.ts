import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebms")
export default class EbmController {
  @operation({
    summary: "Get Ebms",
  })
  @get()
  static getEbms = procedure({
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
