import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbis")
export default class LbiController {
  @operation({
    summary: "Get Lbis",
  })
  @get()
  static getLbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbi",
  })
  @post("{id}")
  static createLbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
