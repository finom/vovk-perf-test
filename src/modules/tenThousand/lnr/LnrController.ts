import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnrs")
export default class LnrController {
  @operation({
    summary: "Get Lnrs",
  })
  @get()
  static getLnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnr",
  })
  @post("{id}")
  static createLnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
