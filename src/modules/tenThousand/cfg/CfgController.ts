import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfg")
export default class CfgController {
  @operation({
    summary: "Get Cfg",
  })
  @get()
  static getCfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfg",
  })
  @post("{id}")
  static createCfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
