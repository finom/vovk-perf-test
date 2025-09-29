import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izus")
export default class IzuController {
  @operation({
    summary: "Get Izus",
  })
  @get()
  static getIzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izu",
  })
  @post("{id}")
  static createIzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
