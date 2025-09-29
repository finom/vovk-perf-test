import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrrs")
export default class NrrController {
  @operation({
    summary: "Get Nrrs",
  })
  @get()
  static getNrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrr",
  })
  @post("{id}")
  static createNrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
