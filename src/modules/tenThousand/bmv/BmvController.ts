import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmvs")
export default class BmvController {
  @operation({
    summary: "Get Bmvs",
  })
  @get()
  static getBmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmv",
  })
  @post("{id}")
  static createBmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
