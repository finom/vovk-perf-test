import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzs")
export default class MzsController {
  @operation({
    summary: "Get Mzs",
  })
  @get()
  static getMzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzs",
  })
  @post("{id}")
  static createMzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
