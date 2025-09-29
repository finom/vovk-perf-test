import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbws")
export default class NbwController {
  @operation({
    summary: "Get Nbws",
  })
  @get()
  static getNbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbw",
  })
  @post("{id}")
  static createNbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
