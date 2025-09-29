import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aevs")
export default class AevController {
  @operation({
    summary: "Get Aevs",
  })
  @get()
  static getAevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aev",
  })
  @post("{id}")
  static createAev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
