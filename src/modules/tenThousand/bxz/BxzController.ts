import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxzs")
export default class BxzController {
  @operation({
    summary: "Get Bxzs",
  })
  @get()
  static getBxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxz",
  })
  @post("{id}")
  static createBxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
