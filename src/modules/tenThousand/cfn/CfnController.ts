import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfn")
export default class CfnController {
  @operation({
    summary: "Get Cfn",
  })
  @get()
  static getCfn = procedure({
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
