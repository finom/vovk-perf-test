import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbms")
export default class NbmController {
  @operation({
    summary: "Get Nbms",
  })
  @get()
  static getNbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbm",
  })
  @post("{id}")
  static createNbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
