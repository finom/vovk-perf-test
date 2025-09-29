import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtes")
export default class MteController {
  @operation({
    summary: "Get Mtes",
  })
  @get()
  static getMtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mte",
  })
  @post("{id}")
  static createMte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
