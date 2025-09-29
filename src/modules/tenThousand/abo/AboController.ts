import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abos")
export default class AboController {
  @operation({
    summary: "Get Abos",
  })
  @get()
  static getAbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abo",
  })
  @post("{id}")
  static createAbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
