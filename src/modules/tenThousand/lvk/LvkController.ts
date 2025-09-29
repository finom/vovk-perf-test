import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvks")
export default class LvkController {
  @operation({
    summary: "Get Lvks",
  })
  @get()
  static getLvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvk",
  })
  @post("{id}")
  static createLvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
