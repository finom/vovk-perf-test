import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtms")
export default class GtmController {
  @operation({
    summary: "Get Gtms",
  })
  @get()
  static getGtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtm",
  })
  @post("{id}")
  static createGtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
