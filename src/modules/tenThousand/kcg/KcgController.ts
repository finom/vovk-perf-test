import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcgs")
export default class KcgController {
  @operation({
    summary: "Get Kcgs",
  })
  @get()
  static getKcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcg",
  })
  @post("{id}")
  static createKcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
