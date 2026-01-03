import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfvs")
export default class CfvController {
  @operation({
    summary: "Get Cfvs",
  })
  @get()
  static getCfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfv",
  })
  @post("{id}")
  static createCfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
