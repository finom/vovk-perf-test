import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htms")
export default class HtmController {
  @operation({
    summary: "Get Htms",
  })
  @get()
  static getHtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htm",
  })
  @post("{id}")
  static createHtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
