import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvws")
export default class BvwController {
  @operation({
    summary: "Get Bvws",
  })
  @get()
  static getBvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvw",
  })
  @post("{id}")
  static createBvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
