import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yws")
export default class YwController {
  @operation({
    summary: "Get Yws",
  })
  @get()
  static getYws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yw",
  })
  @post("{id}")
  static createYw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
