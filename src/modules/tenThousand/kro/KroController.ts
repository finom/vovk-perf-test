import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kros")
export default class KroController {
  @operation({
    summary: "Get Kros",
  })
  @get()
  static getKros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kro",
  })
  @post("{id}")
  static createKro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
