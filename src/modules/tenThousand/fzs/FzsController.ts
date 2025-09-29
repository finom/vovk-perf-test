import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzs")
export default class FzsController {
  @operation({
    summary: "Get Fzs",
  })
  @get()
  static getFzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzs",
  })
  @post("{id}")
  static createFzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
