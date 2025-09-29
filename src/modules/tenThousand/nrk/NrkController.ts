import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrks")
export default class NrkController {
  @operation({
    summary: "Get Nrks",
  })
  @get()
  static getNrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrk",
  })
  @post("{id}")
  static createNrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
