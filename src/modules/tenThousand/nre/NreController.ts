import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nres")
export default class NreController {
  @operation({
    summary: "Get Nres",
  })
  @get()
  static getNres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nre",
  })
  @post("{id}")
  static createNre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
