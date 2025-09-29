import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kas")
export default class KaController {
  @operation({
    summary: "Get Kas",
  })
  @get()
  static getKas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ka",
  })
  @post("{id}")
  static createKa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
