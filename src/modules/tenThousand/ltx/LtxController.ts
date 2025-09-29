import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltxes")
export default class LtxController {
  @operation({
    summary: "Get Ltxes",
  })
  @get()
  static getLtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltx",
  })
  @post("{id}")
  static createLtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
