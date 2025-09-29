import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idos")
export default class IdoController {
  @operation({
    summary: "Get Idos",
  })
  @get()
  static getIdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ido",
  })
  @post("{id}")
  static createIdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
