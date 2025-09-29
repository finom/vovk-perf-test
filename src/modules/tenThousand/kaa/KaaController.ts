import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaas")
export default class KaaController {
  @operation({
    summary: "Get Kaas",
  })
  @get()
  static getKaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaa",
  })
  @post("{id}")
  static createKaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
