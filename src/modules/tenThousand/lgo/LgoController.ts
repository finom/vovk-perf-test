import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgos")
export default class LgoController {
  @operation({
    summary: "Get Lgos",
  })
  @get()
  static getLgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgo",
  })
  @post("{id}")
  static createLgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
