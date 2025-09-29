import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glks")
export default class GlkController {
  @operation({
    summary: "Get Glks",
  })
  @get()
  static getGlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glk",
  })
  @post("{id}")
  static createGlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
