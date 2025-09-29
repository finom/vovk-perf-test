import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcws")
export default class KcwController {
  @operation({
    summary: "Get Kcws",
  })
  @get()
  static getKcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcw",
  })
  @post("{id}")
  static createKcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
