import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfbs")
export default class LfbController {
  @operation({
    summary: "Get Lfbs",
  })
  @get()
  static getLfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfb",
  })
  @post("{id}")
  static createLfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
