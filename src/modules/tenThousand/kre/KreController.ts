import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kres")
export default class KreController {
  @operation({
    summary: "Get Kres",
  })
  @get()
  static getKres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kre",
  })
  @post("{id}")
  static createKre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
