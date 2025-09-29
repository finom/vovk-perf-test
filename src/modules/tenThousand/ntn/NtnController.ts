import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntns")
export default class NtnController {
  @operation({
    summary: "Get Ntns",
  })
  @get()
  static getNtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntn",
  })
  @post("{id}")
  static createNtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
