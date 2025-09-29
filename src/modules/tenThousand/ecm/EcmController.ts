import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecms")
export default class EcmController {
  @operation({
    summary: "Get Ecms",
  })
  @get()
  static getEcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecm",
  })
  @post("{id}")
  static createEcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
