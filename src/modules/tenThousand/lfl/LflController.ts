import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfls")
export default class LflController {
  @operation({
    summary: "Get Lfls",
  })
  @get()
  static getLfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfl",
  })
  @post("{id}")
  static createLfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
