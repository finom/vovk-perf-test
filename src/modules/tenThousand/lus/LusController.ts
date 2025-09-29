import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luses")
export default class LusController {
  @operation({
    summary: "Get Luses",
  })
  @get()
  static getLuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lus",
  })
  @post("{id}")
  static createLus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
