import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfus")
export default class CfuController {
  @operation({
    summary: "Get Cfus",
  })
  @get()
  static getCfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfu",
  })
  @post("{id}")
  static createCfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
