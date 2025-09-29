import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcms")
export default class KcmController {
  @operation({
    summary: "Get Kcms",
  })
  @get()
  static getKcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcm",
  })
  @post("{id}")
  static createKcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
