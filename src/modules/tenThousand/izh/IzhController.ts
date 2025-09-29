import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izhs")
export default class IzhController {
  @operation({
    summary: "Get Izhs",
  })
  @get()
  static getIzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izh",
  })
  @post("{id}")
  static createIzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
