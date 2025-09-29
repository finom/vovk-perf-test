import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxus")
export default class KxuController {
  @operation({
    summary: "Get Kxus",
  })
  @get()
  static getKxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxu",
  })
  @post("{id}")
  static createKxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
