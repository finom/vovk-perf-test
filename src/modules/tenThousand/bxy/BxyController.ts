import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxies")
export default class BxyController {
  @operation({
    summary: "Get Bxies",
  })
  @get()
  static getBxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxy",
  })
  @post("{id}")
  static createBxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
