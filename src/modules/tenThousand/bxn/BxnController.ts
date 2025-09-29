import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxns")
export default class BxnController {
  @operation({
    summary: "Get Bxns",
  })
  @get()
  static getBxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxn",
  })
  @post("{id}")
  static createBxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
