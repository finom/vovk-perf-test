import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcgs")
export default class LcgController {
  @operation({
    summary: "Get Lcgs",
  })
  @get()
  static getLcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcg",
  })
  @post("{id}")
  static createLcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
