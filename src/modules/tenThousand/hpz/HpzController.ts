import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpzs")
export default class HpzController {
  @operation({
    summary: "Get Hpzs",
  })
  @get()
  static getHpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpz",
  })
  @post("{id}")
  static createHpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
