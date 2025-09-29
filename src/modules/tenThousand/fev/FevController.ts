import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fevs")
export default class FevController {
  @operation({
    summary: "Get Fevs",
  })
  @get()
  static getFevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fev",
  })
  @post("{id}")
  static createFev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
