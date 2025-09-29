import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bons")
export default class BonController {
  @operation({
    summary: "Get Bons",
  })
  @get()
  static getBons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bon",
  })
  @post("{id}")
  static createBon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
