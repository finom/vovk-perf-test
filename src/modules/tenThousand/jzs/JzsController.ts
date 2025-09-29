import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzs")
export default class JzsController {
  @operation({
    summary: "Get Jzs",
  })
  @get()
  static getJzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzs",
  })
  @post("{id}")
  static createJzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
