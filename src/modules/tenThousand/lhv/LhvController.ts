import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhvs")
export default class LhvController {
  @operation({
    summary: "Get Lhvs",
  })
  @get()
  static getLhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhv",
  })
  @post("{id}")
  static createLhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
