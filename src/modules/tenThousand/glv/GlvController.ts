import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glvs")
export default class GlvController {
  @operation({
    summary: "Get Glvs",
  })
  @get()
  static getGlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glv",
  })
  @post("{id}")
  static createGlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
