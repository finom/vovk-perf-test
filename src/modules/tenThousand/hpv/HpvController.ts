import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpvs")
export default class HpvController {
  @operation({
    summary: "Get Hpvs",
  })
  @get()
  static getHpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpv",
  })
  @post("{id}")
  static createHpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
