import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nras")
export default class NraController {
  @operation({
    summary: "Get Nras",
  })
  @get()
  static getNras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nra",
  })
  @post("{id}")
  static createNra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
