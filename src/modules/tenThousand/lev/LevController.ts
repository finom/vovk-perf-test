import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("levs")
export default class LevController {
  @operation({
    summary: "Get Levs",
  })
  @get()
  static getLevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lev",
  })
  @post("{id}")
  static createLev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
