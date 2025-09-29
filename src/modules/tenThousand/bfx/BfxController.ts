import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfxes")
export default class BfxController {
  @operation({
    summary: "Get Bfxes",
  })
  @get()
  static getBfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfx",
  })
  @post("{id}")
  static createBfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
