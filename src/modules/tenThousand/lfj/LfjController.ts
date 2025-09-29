import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfjs")
export default class LfjController {
  @operation({
    summary: "Get Lfjs",
  })
  @get()
  static getLfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfj",
  })
  @post("{id}")
  static createLfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
