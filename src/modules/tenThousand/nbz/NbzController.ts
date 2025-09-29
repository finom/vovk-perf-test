import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbzs")
export default class NbzController {
  @operation({
    summary: "Get Nbzs",
  })
  @get()
  static getNbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbz",
  })
  @post("{id}")
  static createNbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
