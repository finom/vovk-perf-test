import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndvs")
export default class NdvController {
  @operation({
    summary: "Get Ndvs",
  })
  @get()
  static getNdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndv",
  })
  @post("{id}")
  static createNdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
