import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkzs")
export default class LkzController {
  @operation({
    summary: "Get Lkzs",
  })
  @get()
  static getLkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkz",
  })
  @post("{id}")
  static createLkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
