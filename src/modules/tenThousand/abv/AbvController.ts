import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abvs")
export default class AbvController {
  @operation({
    summary: "Get Abvs",
  })
  @get()
  static getAbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abv",
  })
  @post("{id}")
  static createAbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
