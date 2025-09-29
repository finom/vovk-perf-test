import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("effs")
export default class EffController {
  @operation({
    summary: "Get Effs",
  })
  @get()
  static getEffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eff",
  })
  @post("{id}")
  static createEff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
