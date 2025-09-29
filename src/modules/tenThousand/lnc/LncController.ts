import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lncs")
export default class LncController {
  @operation({
    summary: "Get Lncs",
  })
  @get()
  static getLncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnc",
  })
  @post("{id}")
  static createLnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
