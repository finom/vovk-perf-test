import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lges")
export default class LgeController {
  @operation({
    summary: "Get Lges",
  })
  @get()
  static getLges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lge",
  })
  @post("{id}")
  static createLge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
