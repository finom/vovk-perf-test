import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccms")
export default class CcmController {
  @operation({
    summary: "Get Ccms",
  })
  @get()
  static getCcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccm",
  })
  @post("{id}")
  static createCcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
