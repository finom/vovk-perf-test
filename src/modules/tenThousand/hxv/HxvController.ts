import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxvs")
export default class HxvController {
  @operation({
    summary: "Get Hxvs",
  })
  @get()
  static getHxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxv",
  })
  @post("{id}")
  static createHxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
