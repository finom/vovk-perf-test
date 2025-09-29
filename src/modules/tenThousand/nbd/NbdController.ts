import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbds")
export default class NbdController {
  @operation({
    summary: "Get Nbds",
  })
  @get()
  static getNbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbd",
  })
  @post("{id}")
  static createNbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
