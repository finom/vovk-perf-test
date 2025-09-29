import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcxes")
export default class BcxController {
  @operation({
    summary: "Get Bcxes",
  })
  @get()
  static getBcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcx",
  })
  @post("{id}")
  static createBcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
