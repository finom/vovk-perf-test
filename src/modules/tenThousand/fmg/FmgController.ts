import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmgs")
export default class FmgController {
  @operation({
    summary: "Get Fmgs",
  })
  @get()
  static getFmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmg",
  })
  @post("{id}")
  static createFmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
