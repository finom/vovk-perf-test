import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcbs")
export default class KcbController {
  @operation({
    summary: "Get Kcbs",
  })
  @get()
  static getKcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcb",
  })
  @post("{id}")
  static createKcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
