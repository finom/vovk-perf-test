import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbos")
export default class NboController {
  @operation({
    summary: "Get Nbos",
  })
  @get()
  static getNbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbo",
  })
  @post("{id}")
  static createNbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
