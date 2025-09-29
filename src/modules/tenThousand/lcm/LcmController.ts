import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcms")
export default class LcmController {
  @operation({
    summary: "Get Lcms",
  })
  @get()
  static getLcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcm",
  })
  @post("{id}")
  static createLcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
