import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exts")
export default class ExtController {
  @operation({
    summary: "Get Exts",
  })
  @get()
  static getExts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ext",
  })
  @post("{id}")
  static createExt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
