import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfp")
export default class CfpController {
  @operation({
    summary: "Get Cfp",
  })
  @get()
  static getCfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfp",
  })
  @post("{id}")
  static createCfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
