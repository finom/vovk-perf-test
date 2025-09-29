import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izs")
export default class IzsController {
  @operation({
    summary: "Get Izs",
  })
  @get()
  static getIzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izs",
  })
  @post("{id}")
  static createIzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
