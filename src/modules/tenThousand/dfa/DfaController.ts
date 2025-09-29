import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfas")
export default class DfaController {
  @operation({
    summary: "Get Dfas",
  })
  @get()
  static getDfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfa",
  })
  @post("{id}")
  static createDfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
