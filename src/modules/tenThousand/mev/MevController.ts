import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mevs")
export default class MevController {
  @operation({
    summary: "Get Mevs",
  })
  @get()
  static getMevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mev",
  })
  @post("{id}")
  static createMev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
