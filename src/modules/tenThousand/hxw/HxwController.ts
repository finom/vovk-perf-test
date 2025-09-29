import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxws")
export default class HxwController {
  @operation({
    summary: "Get Hxws",
  })
  @get()
  static getHxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxw",
  })
  @post("{id}")
  static createHxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
