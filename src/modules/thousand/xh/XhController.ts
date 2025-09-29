import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xhs")
export default class XhController {
  @operation({
    summary: "Get Xhs",
  })
  @get()
  static getXhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xh",
  })
  @post("{id}")
  static createXh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
