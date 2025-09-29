import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alns")
export default class AlnController {
  @operation({
    summary: "Get Alns",
  })
  @get()
  static getAlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aln",
  })
  @post("{id}")
  static createAln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
