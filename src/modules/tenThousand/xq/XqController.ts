import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xqs")
export default class XqController {
  @operation({
    summary: "Get Xqs",
  })
  @get()
  static getXqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xq",
  })
  @post("{id}")
  static createXq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
