import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebms")
export default class EbmController {
  @operation({
    summary: "Get Ebms",
  })
  @get()
  static getEbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebm",
  })
  @post("{id}")
  static createEbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
