import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxs")
export default class BxsController {
  @operation({
    summary: "Get Bxs",
  })
  @get()
  static getBxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxs",
  })
  @post("{id}")
  static createBxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
