import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmbs")
export default class FmbController {
  @operation({
    summary: "Get Fmbs",
  })
  @get()
  static getFmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmb",
  })
  @post("{id}")
  static createFmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
