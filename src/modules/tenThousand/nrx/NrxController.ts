import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrxes")
export default class NrxController {
  @operation({
    summary: "Get Nrxes",
  })
  @get()
  static getNrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrx",
  })
  @post("{id}")
  static createNrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
