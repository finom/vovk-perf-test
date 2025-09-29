import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkus")
export default class LkuController {
  @operation({
    summary: "Get Lkus",
  })
  @get()
  static getLkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lku",
  })
  @post("{id}")
  static createLku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
