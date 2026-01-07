import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfm")
export default class CfmController {
  @operation({
    summary: "Get Cfm",
  })
  @get()
  static getCfm = procedure({
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
