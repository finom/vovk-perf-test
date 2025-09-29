import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yys")
export default class YyController {
  @operation({
    summary: "Get Yys",
  })
  @get()
  static getYys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yy",
  })
  @post("{id}")
  static createYy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
