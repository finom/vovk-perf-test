import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bevs")
export default class BevController {
  @operation({
    summary: "Get Bevs",
  })
  @get()
  static getBevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bev",
  })
  @post("{id}")
  static createBev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
