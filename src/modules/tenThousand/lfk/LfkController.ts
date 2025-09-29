import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfks")
export default class LfkController {
  @operation({
    summary: "Get Lfks",
  })
  @get()
  static getLfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfk",
  })
  @post("{id}")
  static createLfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
