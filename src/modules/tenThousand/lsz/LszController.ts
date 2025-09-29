import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lszs")
export default class LszController {
  @operation({
    summary: "Get Lszs",
  })
  @get()
  static getLszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsz",
  })
  @post("{id}")
  static createLsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
