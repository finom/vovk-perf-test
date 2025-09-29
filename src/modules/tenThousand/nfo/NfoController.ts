import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfos")
export default class NfoController {
  @operation({
    summary: "Get Nfos",
  })
  @get()
  static getNfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfo",
  })
  @post("{id}")
  static createNfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
