import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvqs")
export default class BvqController {
  @operation({
    summary: "Get Bvqs",
  })
  @get()
  static getBvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvq",
  })
  @post("{id}")
  static createBvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
