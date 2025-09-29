import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvks")
export default class BvkController {
  @operation({
    summary: "Get Bvks",
  })
  @get()
  static getBvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvk",
  })
  @post("{id}")
  static createBvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
