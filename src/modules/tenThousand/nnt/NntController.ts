import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnts")
export default class NntController {
  @operation({
    summary: "Get Nnts",
  })
  @get()
  static getNnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnt",
  })
  @post("{id}")
  static createNnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
