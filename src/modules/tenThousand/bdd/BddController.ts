import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdds")
export default class BddController {
  @operation({
    summary: "Get Bdds",
  })
  @get()
  static getBdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdd",
  })
  @post("{id}")
  static createBdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
