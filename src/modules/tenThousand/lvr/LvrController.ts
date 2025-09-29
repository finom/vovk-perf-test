import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvrs")
export default class LvrController {
  @operation({
    summary: "Get Lvrs",
  })
  @get()
  static getLvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvr",
  })
  @post("{id}")
  static createLvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
