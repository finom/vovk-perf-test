import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxbs")
export default class HxbController {
  @operation({
    summary: "Get Hxbs",
  })
  @get()
  static getHxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxb",
  })
  @post("{id}")
  static createHxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
