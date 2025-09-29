import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfxes")
export default class KfxController {
  @operation({
    summary: "Get Kfxes",
  })
  @get()
  static getKfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfx",
  })
  @post("{id}")
  static createKfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
