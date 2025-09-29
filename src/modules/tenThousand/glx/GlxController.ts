import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glxes")
export default class GlxController {
  @operation({
    summary: "Get Glxes",
  })
  @get()
  static getGlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glx",
  })
  @post("{id}")
  static createGlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
