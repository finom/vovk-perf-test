import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmbs")
export default class LmbController {
  @operation({
    summary: "Get Lmbs",
  })
  @get()
  static getLmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmb",
  })
  @post("{id}")
  static createLmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
