import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hevs")
export default class HevController {
  @operation({
    summary: "Get Hevs",
  })
  @get()
  static getHevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hev",
  })
  @post("{id}")
  static createHev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
