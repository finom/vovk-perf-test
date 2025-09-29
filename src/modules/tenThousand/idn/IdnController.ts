import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idns")
export default class IdnController {
  @operation({
    summary: "Get Idns",
  })
  @get()
  static getIdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idn",
  })
  @post("{id}")
  static createIdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
