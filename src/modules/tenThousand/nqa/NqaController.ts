import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqas")
export default class NqaController {
  @operation({
    summary: "Get Nqas",
  })
  @get()
  static getNqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqa",
  })
  @post("{id}")
  static createNqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
