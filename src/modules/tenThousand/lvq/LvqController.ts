import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvqs")
export default class LvqController {
  @operation({
    summary: "Get Lvqs",
  })
  @get()
  static getLvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvq",
  })
  @post("{id}")
  static createLvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
