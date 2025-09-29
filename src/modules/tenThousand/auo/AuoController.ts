import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auos")
export default class AuoController {
  @operation({
    summary: "Get Auos",
  })
  @get()
  static getAuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auo",
  })
  @post("{id}")
  static createAuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
