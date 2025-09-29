import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvzs")
export default class BvzController {
  @operation({
    summary: "Get Bvzs",
  })
  @get()
  static getBvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvz",
  })
  @post("{id}")
  static createBvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
