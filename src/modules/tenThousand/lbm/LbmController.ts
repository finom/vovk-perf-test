import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbms")
export default class LbmController {
  @operation({
    summary: "Get Lbms",
  })
  @get()
  static getLbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbm",
  })
  @post("{id}")
  static createLbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
