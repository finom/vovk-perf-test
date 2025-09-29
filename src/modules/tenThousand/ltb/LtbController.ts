import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltbs")
export default class LtbController {
  @operation({
    summary: "Get Ltbs",
  })
  @get()
  static getLtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltb",
  })
  @post("{id}")
  static createLtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
