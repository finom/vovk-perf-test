import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neus")
export default class NeuController {
  @operation({
    summary: "Get Neus",
  })
  @get()
  static getNeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neu",
  })
  @post("{id}")
  static createNeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
