import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxus")
export default class HxuController {
  @operation({
    summary: "Get Hxus",
  })
  @get()
  static getHxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxu",
  })
  @post("{id}")
  static createHxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
