import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnms")
export default class LnmController {
  @operation({
    summary: "Get Lnms",
  })
  @get()
  static getLnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnm",
  })
  @post("{id}")
  static createLnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
