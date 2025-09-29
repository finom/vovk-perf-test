import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mles")
export default class MleController {
  @operation({
    summary: "Get Mles",
  })
  @get()
  static getMles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mle",
  })
  @post("{id}")
  static createMle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
