import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mots")
export default class MotController {
  @operation({
    summary: "Get Mots",
  })
  @get()
  static getMots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mot",
  })
  @post("{id}")
  static createMot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
