import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfms")
export default class LfmController {
  @operation({
    summary: "Get Lfms",
  })
  @get()
  static getLfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfm",
  })
  @post("{id}")
  static createLfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
