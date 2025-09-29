import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgos")
export default class KgoController {
  @operation({
    summary: "Get Kgos",
  })
  @get()
  static getKgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgo",
  })
  @post("{id}")
  static createKgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
