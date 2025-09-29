import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxbs")
export default class KxbController {
  @operation({
    summary: "Get Kxbs",
  })
  @get()
  static getKxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxb",
  })
  @post("{id}")
  static createKxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
