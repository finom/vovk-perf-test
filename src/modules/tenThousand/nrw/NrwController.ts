import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrws")
export default class NrwController {
  @operation({
    summary: "Get Nrws",
  })
  @get()
  static getNrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrw",
  })
  @post("{id}")
  static createNrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
