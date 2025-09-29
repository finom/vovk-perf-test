import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfgs")
export default class CfgController {
  @operation({
    summary: "Get Cfgs",
  })
  @get()
  static getCfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfg",
  })
  @post("{id}")
  static createCfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
