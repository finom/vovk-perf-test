import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nejs")
export default class NejController {
  @operation({
    summary: "Get Nejs",
  })
  @get()
  static getNejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nej",
  })
  @post("{id}")
  static createNej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
