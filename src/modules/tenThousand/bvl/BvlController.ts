import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvls")
export default class BvlController {
  @operation({
    summary: "Get Bvls",
  })
  @get()
  static getBvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvl",
  })
  @post("{id}")
  static createBvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
