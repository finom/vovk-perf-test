import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvbs")
export default class BvbController {
  @operation({
    summary: "Get Bvbs",
  })
  @get()
  static getBvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvb",
  })
  @post("{id}")
  static createBvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
