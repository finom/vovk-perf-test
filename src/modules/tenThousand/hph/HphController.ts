import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hphs")
export default class HphController {
  @operation({
    summary: "Get Hphs",
  })
  @get()
  static getHphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hph",
  })
  @post("{id}")
  static createHph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
