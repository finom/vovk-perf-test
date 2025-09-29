import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmgs")
export default class LmgController {
  @operation({
    summary: "Get Lmgs",
  })
  @get()
  static getLmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmg",
  })
  @post("{id}")
  static createLmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
