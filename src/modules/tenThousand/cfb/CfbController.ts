import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfbs")
export default class CfbController {
  @operation({
    summary: "Get Cfbs",
  })
  @get()
  static getCfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfb",
  })
  @post("{id}")
  static createCfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
