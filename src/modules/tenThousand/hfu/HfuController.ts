import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfus")
export default class HfuController {
  @operation({
    summary: "Get Hfus",
  })
  @get()
  static getHfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfu",
  })
  @post("{id}")
  static createHfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
