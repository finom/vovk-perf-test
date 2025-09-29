import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbjs")
export default class NbjController {
  @operation({
    summary: "Get Nbjs",
  })
  @get()
  static getNbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbj",
  })
  @post("{id}")
  static createNbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
