import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntas")
export default class NtaController {
  @operation({
    summary: "Get Ntas",
  })
  @get()
  static getNtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nta",
  })
  @post("{id}")
  static createNta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
