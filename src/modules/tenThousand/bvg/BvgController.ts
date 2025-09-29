import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvgs")
export default class BvgController {
  @operation({
    summary: "Get Bvgs",
  })
  @get()
  static getBvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvg",
  })
  @post("{id}")
  static createBvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
