import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbls")
export default class LblController {
  @operation({
    summary: "Get Lbls",
  })
  @get()
  static getLbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbl",
  })
  @post("{id}")
  static createLbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
