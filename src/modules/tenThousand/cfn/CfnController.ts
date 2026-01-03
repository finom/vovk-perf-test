import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfns")
export default class CfnController {
  @operation({
    summary: "Get Cfns",
  })
  @get()
  static getCfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfn",
  })
  @post("{id}")
  static createCfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
