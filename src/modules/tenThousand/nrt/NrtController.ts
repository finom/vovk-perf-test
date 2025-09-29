import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrts")
export default class NrtController {
  @operation({
    summary: "Get Nrts",
  })
  @get()
  static getNrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrt",
  })
  @post("{id}")
  static createNrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
