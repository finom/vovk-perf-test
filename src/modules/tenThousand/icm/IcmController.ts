import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icms")
export default class IcmController {
  @operation({
    summary: "Get Icms",
  })
  @get()
  static getIcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icm",
  })
  @post("{id}")
  static createIcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
