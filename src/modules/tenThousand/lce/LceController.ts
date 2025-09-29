import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lces")
export default class LceController {
  @operation({
    summary: "Get Lces",
  })
  @get()
  static getLces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lce",
  })
  @post("{id}")
  static createLce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
