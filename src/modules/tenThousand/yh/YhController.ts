import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yhs")
export default class YhController {
  @operation({
    summary: "Get Yhs",
  })
  @get()
  static getYhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yh",
  })
  @post("{id}")
  static createYh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
