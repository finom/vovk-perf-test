import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxqs")
export default class HxqController {
  @operation({
    summary: "Get Hxqs",
  })
  @get()
  static getHxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxq",
  })
  @post("{id}")
  static createHxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
