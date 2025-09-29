import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xgs")
export default class XgController {
  @operation({
    summary: "Get Xgs",
  })
  @get()
  static getXgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xg",
  })
  @post("{id}")
  static createXg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
