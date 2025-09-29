import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcms")
export default class BcmController {
  @operation({
    summary: "Get Bcms",
  })
  @get()
  static getBcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcm",
  })
  @post("{id}")
  static createBcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
