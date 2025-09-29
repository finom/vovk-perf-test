import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxks")
export default class KxkController {
  @operation({
    summary: "Get Kxks",
  })
  @get()
  static getKxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxk",
  })
  @post("{id}")
  static createKxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
