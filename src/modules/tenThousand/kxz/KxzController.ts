import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxzs")
export default class KxzController {
  @operation({
    summary: "Get Kxzs",
  })
  @get()
  static getKxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxz",
  })
  @post("{id}")
  static createKxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
