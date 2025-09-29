import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktes")
export default class KteController {
  @operation({
    summary: "Get Ktes",
  })
  @get()
  static getKtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kte",
  })
  @post("{id}")
  static createKte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
