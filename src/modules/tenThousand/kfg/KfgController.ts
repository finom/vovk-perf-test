import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfgs")
export default class KfgController {
  @operation({
    summary: "Get Kfgs",
  })
  @get()
  static getKfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfg",
  })
  @post("{id}")
  static createKfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
