import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfxes")
export default class JfxController {
  @operation({
    summary: "Get Jfxes",
  })
  @get()
  static getJfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfx",
  })
  @post("{id}")
  static createJfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
