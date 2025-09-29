import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxvs")
export default class BxvController {
  @operation({
    summary: "Get Bxvs",
  })
  @get()
  static getBxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxv",
  })
  @post("{id}")
  static createBxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
