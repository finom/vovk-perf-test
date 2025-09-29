import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izws")
export default class IzwController {
  @operation({
    summary: "Get Izws",
  })
  @get()
  static getIzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izw",
  })
  @post("{id}")
  static createIzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
