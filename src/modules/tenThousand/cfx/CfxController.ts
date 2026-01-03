import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfxes")
export default class CfxController {
  @operation({
    summary: "Get Cfxes",
  })
  @get()
  static getCfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfx",
  })
  @post("{id}")
  static createCfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
