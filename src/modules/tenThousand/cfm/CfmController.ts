import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfms")
export default class CfmController {
  @operation({
    summary: "Get Cfms",
  })
  @get()
  static getCfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfm",
  })
  @post("{id}")
  static createCfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
