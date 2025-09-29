import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffas")
export default class FfaController {
  @operation({
    summary: "Get Ffas",
  })
  @get()
  static getFfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffa",
  })
  @post("{id}")
  static createFfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
