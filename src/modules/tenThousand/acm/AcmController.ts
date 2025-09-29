import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acms")
export default class AcmController {
  @operation({
    summary: "Get Acms",
  })
  @get()
  static getAcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acm",
  })
  @post("{id}")
  static createAcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
