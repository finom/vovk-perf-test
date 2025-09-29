import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvxes")
export default class BvxController {
  @operation({
    summary: "Get Bvxes",
  })
  @get()
  static getBvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvx",
  })
  @post("{id}")
  static createBvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
