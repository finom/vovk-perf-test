import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxvs")
export default class KxvController {
  @operation({
    summary: "Get Kxvs",
  })
  @get()
  static getKxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxv",
  })
  @post("{id}")
  static createKxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
