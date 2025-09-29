import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrcs")
export default class NrcController {
  @operation({
    summary: "Get Nrcs",
  })
  @get()
  static getNrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrc",
  })
  @post("{id}")
  static createNrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
