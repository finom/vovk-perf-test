import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kras")
export default class KraController {
  @operation({
    summary: "Get Kras",
  })
  @get()
  static getKras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kra",
  })
  @post("{id}")
  static createKra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
