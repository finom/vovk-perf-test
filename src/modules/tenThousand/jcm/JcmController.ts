import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcms")
export default class JcmController {
  @operation({
    summary: "Get Jcms",
  })
  @get()
  static getJcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcm",
  })
  @post("{id}")
  static createJcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
