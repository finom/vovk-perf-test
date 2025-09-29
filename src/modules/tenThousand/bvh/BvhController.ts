import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvhs")
export default class BvhController {
  @operation({
    summary: "Get Bvhs",
  })
  @get()
  static getBvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvh",
  })
  @post("{id}")
  static createBvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
