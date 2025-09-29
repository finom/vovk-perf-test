import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffxes")
export default class FfxController {
  @operation({
    summary: "Get Ffxes",
  })
  @get()
  static getFfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffx",
  })
  @post("{id}")
  static createFfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
