import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbgs")
export default class NbgController {
  @operation({
    summary: "Get Nbgs",
  })
  @get()
  static getNbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbg",
  })
  @post("{id}")
  static createNbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
