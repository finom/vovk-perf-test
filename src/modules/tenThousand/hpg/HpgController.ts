import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpgs")
export default class HpgController {
  @operation({
    summary: "Get Hpgs",
  })
  @get()
  static getHpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpg",
  })
  @post("{id}")
  static createHpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
