import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jevs")
export default class JevController {
  @operation({
    summary: "Get Jevs",
  })
  @get()
  static getJevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jev",
  })
  @post("{id}")
  static createJev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
