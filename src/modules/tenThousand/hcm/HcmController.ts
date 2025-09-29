import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcms")
export default class HcmController {
  @operation({
    summary: "Get Hcms",
  })
  @get()
  static getHcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcm",
  })
  @post("{id}")
  static createHcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
