import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvjs")
export default class BvjController {
  @operation({
    summary: "Get Bvjs",
  })
  @get()
  static getBvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvj",
  })
  @post("{id}")
  static createBvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
