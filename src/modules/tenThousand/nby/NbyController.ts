import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbies")
export default class NbyController {
  @operation({
    summary: "Get Nbies",
  })
  @get()
  static getNbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nby",
  })
  @post("{id}")
  static createNby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
