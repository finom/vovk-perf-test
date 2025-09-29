import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfps")
export default class CfpController {
  @operation({
    summary: "Get Cfps",
  })
  @get()
  static getCfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfp",
  })
  @post("{id}")
  static createCfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
