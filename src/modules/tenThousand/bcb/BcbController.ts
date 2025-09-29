import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcbs")
export default class BcbController {
  @operation({
    summary: "Get Bcbs",
  })
  @get()
  static getBcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcb",
  })
  @post("{id}")
  static createBcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
