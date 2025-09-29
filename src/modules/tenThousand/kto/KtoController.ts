import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktos")
export default class KtoController {
  @operation({
    summary: "Get Ktos",
  })
  @get()
  static getKtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kto",
  })
  @post("{id}")
  static createKto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
