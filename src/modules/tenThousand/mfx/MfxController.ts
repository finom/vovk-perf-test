import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfxes")
export default class MfxController {
  @operation({
    summary: "Get Mfxes",
  })
  @get()
  static getMfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfx",
  })
  @post("{id}")
  static createMfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
