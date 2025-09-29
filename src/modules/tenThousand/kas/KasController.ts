import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kas")
export default class KasController {
  @operation({
    summary: "Get Kas",
  })
  @get()
  static getKas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kas",
  })
  @post("{id}")
  static createKas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
