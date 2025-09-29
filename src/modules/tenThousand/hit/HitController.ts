import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hits")
export default class HitController {
  @operation({
    summary: "Get Hits",
  })
  @get()
  static getHits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hit",
  })
  @post("{id}")
  static createHit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
