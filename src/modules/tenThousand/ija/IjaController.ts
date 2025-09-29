import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijas")
export default class IjaController {
  @operation({
    summary: "Get Ijas",
  })
  @get()
  static getIjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ija",
  })
  @post("{id}")
  static createIja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
