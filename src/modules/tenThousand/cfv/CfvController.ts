import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfvs")
export default class CfvController {
  @operation({
    summary: "Get Cfvs",
  })
  @get()
  static getCfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfv",
  })
  @post("{id}")
  static createCfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
