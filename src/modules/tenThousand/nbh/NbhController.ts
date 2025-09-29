import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbhs")
export default class NbhController {
  @operation({
    summary: "Get Nbhs",
  })
  @get()
  static getNbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbh",
  })
  @post("{id}")
  static createNbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
