import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfas")
export default class BfaController {
  @operation({
    summary: "Get Bfas",
  })
  @get()
  static getBfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfa",
  })
  @post("{id}")
  static createBfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
