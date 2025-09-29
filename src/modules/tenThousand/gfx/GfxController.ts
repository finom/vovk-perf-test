import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfxes")
export default class GfxController {
  @operation({
    summary: "Get Gfxes",
  })
  @get()
  static getGfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfx",
  })
  @post("{id}")
  static createGfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
