import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbls")
export default class NblController {
  @operation({
    summary: "Get Nbls",
  })
  @get()
  static getNbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbl",
  })
  @post("{id}")
  static createNbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
