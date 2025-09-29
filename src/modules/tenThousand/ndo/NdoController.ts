import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndos")
export default class NdoController {
  @operation({
    summary: "Get Ndos",
  })
  @get()
  static getNdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndo",
  })
  @post("{id}")
  static createNdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
