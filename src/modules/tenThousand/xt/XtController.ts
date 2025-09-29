import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xts")
export default class XtController {
  @operation({
    summary: "Get Xts",
  })
  @get()
  static getXts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xt",
  })
  @post("{id}")
  static createXt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
