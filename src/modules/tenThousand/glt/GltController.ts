import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glts")
export default class GltController {
  @operation({
    summary: "Get Glts",
  })
  @get()
  static getGlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glt",
  })
  @post("{id}")
  static createGlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
