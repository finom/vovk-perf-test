import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpqs")
export default class HpqController {
  @operation({
    summary: "Get Hpqs",
  })
  @get()
  static getHpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpq",
  })
  @post("{id}")
  static createHpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
