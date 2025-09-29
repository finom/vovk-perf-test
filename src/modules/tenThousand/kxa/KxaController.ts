import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxas")
export default class KxaController {
  @operation({
    summary: "Get Kxas",
  })
  @get()
  static getKxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxa",
  })
  @post("{id}")
  static createKxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
