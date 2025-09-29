import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfzs")
export default class CfzController {
  @operation({
    summary: "Get Cfzs",
  })
  @get()
  static getCfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfz",
  })
  @post("{id}")
  static createCfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
