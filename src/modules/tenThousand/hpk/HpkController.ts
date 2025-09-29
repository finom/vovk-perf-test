import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpks")
export default class HpkController {
  @operation({
    summary: "Get Hpks",
  })
  @get()
  static getHpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpk",
  })
  @post("{id}")
  static createHpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
