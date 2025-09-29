import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbrs")
export default class NbrController {
  @operation({
    summary: "Get Nbrs",
  })
  @get()
  static getNbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbr",
  })
  @post("{id}")
  static createNbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
