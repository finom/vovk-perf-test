import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buus")
export default class BuuController {
  @operation({
    summary: "Get Buus",
  })
  @get()
  static getBuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buu",
  })
  @post("{id}")
  static createBuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
