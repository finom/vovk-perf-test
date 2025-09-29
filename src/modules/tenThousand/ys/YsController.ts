import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ys")
export default class YsController {
  @operation({
    summary: "Get Ys",
  })
  @get()
  static getYs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ys",
  })
  @post("{id}")
  static createYs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
