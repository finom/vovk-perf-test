import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ys")
export default class YController {
  @operation({
    summary: "Get YS",
  })
  @get()
  static getYS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Y",
  })
  @post("{id}")
  static createY = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
