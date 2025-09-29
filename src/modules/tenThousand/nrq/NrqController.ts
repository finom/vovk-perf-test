import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrqs")
export default class NrqController {
  @operation({
    summary: "Get Nrqs",
  })
  @get()
  static getNrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrq",
  })
  @post("{id}")
  static createNrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
