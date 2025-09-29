import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfns")
export default class CfnController {
  @operation({
    summary: "Get Cfns",
  })
  @get()
  static getCfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfn",
  })
  @post("{id}")
  static createCfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
