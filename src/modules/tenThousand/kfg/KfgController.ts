import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfg")
export default class KfgController {
  @operation({
    summary: "Get Kfg",
  })
  @get()
  static getKfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfg",
  })
  @post("{id}")
  static createKfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
