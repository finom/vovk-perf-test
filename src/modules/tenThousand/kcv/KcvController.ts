import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcvs")
export default class KcvController {
  @operation({
    summary: "Get Kcvs",
  })
  @get()
  static getKcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcv",
  })
  @post("{id}")
  static createKcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
