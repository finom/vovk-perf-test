import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfus")
export default class LfuController {
  @operation({
    summary: "Get Lfus",
  })
  @get()
  static getLfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfu",
  })
  @post("{id}")
  static createLfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
