import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbas")
export default class NbaController {
  @operation({
    summary: "Get Nbas",
  })
  @get()
  static getNbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nba",
  })
  @post("{id}")
  static createNba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
