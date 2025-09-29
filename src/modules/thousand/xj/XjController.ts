import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xjs")
export default class XjController {
  @operation({
    summary: "Get Xjs",
  })
  @get()
  static getXjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xj",
  })
  @post("{id}")
  static createXj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
