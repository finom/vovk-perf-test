import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqos")
export default class NqoController {
  @operation({
    summary: "Get Nqos",
  })
  @get()
  static getNqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqo",
  })
  @post("{id}")
  static createNqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
