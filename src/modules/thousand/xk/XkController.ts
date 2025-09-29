import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xks")
export default class XkController {
  @operation({
    summary: "Get Xks",
  })
  @get()
  static getXks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xk",
  })
  @post("{id}")
  static createXk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
