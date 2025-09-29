import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxzs")
export default class HxzController {
  @operation({
    summary: "Get Hxzs",
  })
  @get()
  static getHxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxz",
  })
  @post("{id}")
  static createHxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
