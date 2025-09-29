import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbvs")
export default class LbvController {
  @operation({
    summary: "Get Lbvs",
  })
  @get()
  static getLbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbv",
  })
  @post("{id}")
  static createLbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
