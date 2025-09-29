import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfgs")
export default class HfgController {
  @operation({
    summary: "Get Hfgs",
  })
  @get()
  static getHfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfg",
  })
  @post("{id}")
  static createHfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
