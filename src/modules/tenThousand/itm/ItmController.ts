import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itms")
export default class ItmController {
  @operation({
    summary: "Get Itms",
  })
  @get()
  static getItms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itm",
  })
  @post("{id}")
  static createItm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
