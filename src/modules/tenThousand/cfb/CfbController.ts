import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfbs")
export default class CfbController {
  @operation({
    summary: "Get Cfbs",
  })
  @get()
  static getCfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfb",
  })
  @post("{id}")
  static createCfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
