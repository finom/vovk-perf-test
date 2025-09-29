import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvs")
export default class BvsController {
  @operation({
    summary: "Get Bvs",
  })
  @get()
  static getBvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvs",
  })
  @post("{id}")
  static createBvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
