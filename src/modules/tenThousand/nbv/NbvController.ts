import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbvs")
export default class NbvController {
  @operation({
    summary: "Get Nbvs",
  })
  @get()
  static getNbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbv",
  })
  @post("{id}")
  static createNbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
