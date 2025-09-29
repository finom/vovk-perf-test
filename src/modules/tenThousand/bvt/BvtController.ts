import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvts")
export default class BvtController {
  @operation({
    summary: "Get Bvts",
  })
  @get()
  static getBvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvt",
  })
  @post("{id}")
  static createBvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
