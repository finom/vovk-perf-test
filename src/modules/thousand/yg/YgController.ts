import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ygs")
export default class YgController {
  @operation({
    summary: "Get Ygs",
  })
  @get()
  static getYgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yg",
  })
  @post("{id}")
  static createYg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
