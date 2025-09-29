import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfxes")
export default class HfxController {
  @operation({
    summary: "Get Hfxes",
  })
  @get()
  static getHfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfx",
  })
  @post("{id}")
  static createHfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
