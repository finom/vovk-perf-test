import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zts")
export default class ZtController {
  @operation({
    summary: "Get Zts",
  })
  @get()
  static getZts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zt",
  })
  @post("{id}")
  static createZt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
