import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lits")
export default class LitController {
  @operation({
    summary: "Get Lits",
  })
  @get()
  static getLits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lit",
  })
  @post("{id}")
  static createLit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
