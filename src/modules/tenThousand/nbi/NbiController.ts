import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbis")
export default class NbiController {
  @operation({
    summary: "Get Nbis",
  })
  @get()
  static getNbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbi",
  })
  @post("{id}")
  static createNbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
