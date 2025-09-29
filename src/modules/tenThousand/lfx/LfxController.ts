import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfxes")
export default class LfxController {
  @operation({
    summary: "Get Lfxes",
  })
  @get()
  static getLfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfx",
  })
  @post("{id}")
  static createLfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
