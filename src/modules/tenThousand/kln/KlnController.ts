import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klns")
export default class KlnController {
  @operation({
    summary: "Get Klns",
  })
  @get()
  static getKlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kln",
  })
  @post("{id}")
  static createKln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
