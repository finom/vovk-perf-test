import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvvs")
export default class BvvController {
  @operation({
    summary: "Get Bvvs",
  })
  @get()
  static getBvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvv",
  })
  @post("{id}")
  static createBvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
