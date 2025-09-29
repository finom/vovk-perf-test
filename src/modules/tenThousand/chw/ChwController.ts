import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chws")
export default class ChwController {
  @operation({
    summary: "Get Chws",
  })
  @get()
  static getChws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chw",
  })
  @post("{id}")
  static createChw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
