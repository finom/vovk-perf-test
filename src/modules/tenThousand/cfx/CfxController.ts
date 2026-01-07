import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfx")
export default class CfxController {
  @operation({
    summary: "Get Cfx",
  })
  @get()
  static getCfx = procedure({
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
