import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmas")
export default class NmaController {
  @operation({
    summary: "Get Nmas",
  })
  @get()
  static getNmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nma",
  })
  @post("{id}")
  static createNma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
