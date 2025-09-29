import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbvs")
export default class BbvController {
  @operation({
    summary: "Get Bbvs",
  })
  @get()
  static getBbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbv",
  })
  @post("{id}")
  static createBbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
