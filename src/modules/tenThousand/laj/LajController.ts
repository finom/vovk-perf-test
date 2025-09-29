import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lajs")
export default class LajController {
  @operation({
    summary: "Get Lajs",
  })
  @get()
  static getLajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Laj",
  })
  @post("{id}")
  static createLaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
