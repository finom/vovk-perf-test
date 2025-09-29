import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzs")
export default class KzsController {
  @operation({
    summary: "Get Kzs",
  })
  @get()
  static getKzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzs",
  })
  @post("{id}")
  static createKzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
