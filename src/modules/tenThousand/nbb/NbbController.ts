import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbbs")
export default class NbbController {
  @operation({
    summary: "Get Nbbs",
  })
  @get()
  static getNbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbb",
  })
  @post("{id}")
  static createNbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
