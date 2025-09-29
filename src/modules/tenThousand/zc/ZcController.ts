import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zcs")
export default class ZcController {
  @operation({
    summary: "Get Zcs",
  })
  @get()
  static getZcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zc",
  })
  @post("{id}")
  static createZc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
