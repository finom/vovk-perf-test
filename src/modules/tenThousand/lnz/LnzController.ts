import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnzs")
export default class LnzController {
  @operation({
    summary: "Get Lnzs",
  })
  @get()
  static getLnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnz",
  })
  @post("{id}")
  static createLnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
