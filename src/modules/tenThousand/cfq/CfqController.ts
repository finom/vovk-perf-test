import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfqs")
export default class CfqController {
  @operation({
    summary: "Get Cfqs",
  })
  @get()
  static getCfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfq",
  })
  @post("{id}")
  static createCfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
