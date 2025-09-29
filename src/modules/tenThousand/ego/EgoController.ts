import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egos")
export default class EgoController {
  @operation({
    summary: "Get Egos",
  })
  @get()
  static getEgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ego",
  })
  @post("{id}")
  static createEgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
