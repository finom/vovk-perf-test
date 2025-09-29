import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfas")
export default class NfaController {
  @operation({
    summary: "Get Nfas",
  })
  @get()
  static getNfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfa",
  })
  @post("{id}")
  static createNfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
