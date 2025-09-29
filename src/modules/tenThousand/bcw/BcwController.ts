import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcws")
export default class BcwController {
  @operation({
    summary: "Get Bcws",
  })
  @get()
  static getBcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcw",
  })
  @post("{id}")
  static createBcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
