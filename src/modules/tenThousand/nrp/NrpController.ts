import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrps")
export default class NrpController {
  @operation({
    summary: "Get Nrps",
  })
  @get()
  static getNrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrp",
  })
  @post("{id}")
  static createNrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
