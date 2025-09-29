import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxhs")
export default class HxhController {
  @operation({
    summary: "Get Hxhs",
  })
  @get()
  static getHxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxh",
  })
  @post("{id}")
  static createHxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
