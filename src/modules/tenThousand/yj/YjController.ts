import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yjs")
export default class YjController {
  @operation({
    summary: "Get Yjs",
  })
  @get()
  static getYjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yj",
  })
  @post("{id}")
  static createYj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
