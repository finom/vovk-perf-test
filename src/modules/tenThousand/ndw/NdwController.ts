import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndws")
export default class NdwController {
  @operation({
    summary: "Get Ndws",
  })
  @get()
  static getNdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndw",
  })
  @post("{id}")
  static createNdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
