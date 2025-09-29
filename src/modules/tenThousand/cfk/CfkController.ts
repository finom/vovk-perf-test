import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfks")
export default class CfkController {
  @operation({
    summary: "Get Cfks",
  })
  @get()
  static getCfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfk",
  })
  @post("{id}")
  static createCfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
