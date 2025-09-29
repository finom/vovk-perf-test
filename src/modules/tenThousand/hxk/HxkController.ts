import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxks")
export default class HxkController {
  @operation({
    summary: "Get Hxks",
  })
  @get()
  static getHxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxk",
  })
  @post("{id}")
  static createHxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
