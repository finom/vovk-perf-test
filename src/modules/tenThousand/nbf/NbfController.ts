import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbfs")
export default class NbfController {
  @operation({
    summary: "Get Nbfs",
  })
  @get()
  static getNbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbf",
  })
  @post("{id}")
  static createNbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
