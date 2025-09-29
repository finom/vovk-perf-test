import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izs")
export default class IzController {
  @operation({
    summary: "Get Izs",
  })
  @get()
  static getIzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iz",
  })
  @post("{id}")
  static createIz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
