import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdqs")
export default class GdqController {
  @operation({
    summary: "Get Gdqs",
  })
  @get()
  static getGdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdq",
  })
  @post("{id}")
  static createGdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
