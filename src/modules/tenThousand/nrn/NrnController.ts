import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrns")
export default class NrnController {
  @operation({
    summary: "Get Nrns",
  })
  @get()
  static getNrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrn",
  })
  @post("{id}")
  static createNrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
