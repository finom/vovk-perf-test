import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yus")
export default class YuController {
  @operation({
    summary: "Get Yus",
  })
  @get()
  static getYus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yu",
  })
  @post("{id}")
  static createYu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
