import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eevs")
export default class EevController {
  @operation({
    summary: "Get Eevs",
  })
  @get()
  static getEevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eev",
  })
  @post("{id}")
  static createEev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
