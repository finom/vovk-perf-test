import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnas")
export default class DnaController {
  @operation({
    summary: "Get Dnas",
  })
  @get()
  static getDnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dna",
  })
  @post("{id}")
  static createDna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
