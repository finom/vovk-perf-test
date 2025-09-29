import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glrs")
export default class GlrController {
  @operation({
    summary: "Get Glrs",
  })
  @get()
  static getGlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glr",
  })
  @post("{id}")
  static createGlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
