import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ybs")
export default class YbController {
  @operation({
    summary: "Get Ybs",
  })
  @get()
  static getYbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yb",
  })
  @post("{id}")
  static createYb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
