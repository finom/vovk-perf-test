import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcvs")
export default class BcvController {
  @operation({
    summary: "Get Bcvs",
  })
  @get()
  static getBcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcv",
  })
  @post("{id}")
  static createBcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
