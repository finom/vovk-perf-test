import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nevs")
export default class NevController {
  @operation({
    summary: "Get Nevs",
  })
  @get()
  static getNevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nev",
  })
  @post("{id}")
  static createNev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
