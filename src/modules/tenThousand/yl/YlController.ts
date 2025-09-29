import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yls")
export default class YlController {
  @operation({
    summary: "Get Yls",
  })
  @get()
  static getYls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yl",
  })
  @post("{id}")
  static createYl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
