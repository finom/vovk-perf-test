import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glzs")
export default class GlzController {
  @operation({
    summary: "Get Glzs",
  })
  @get()
  static getGlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glz",
  })
  @post("{id}")
  static createGlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
