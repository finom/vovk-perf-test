import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfms")
export default class CfmController {
  @operation({
    summary: "Get Cfms",
  })
  @get()
  static getCfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfm",
  })
  @post("{id}")
  static createCfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
