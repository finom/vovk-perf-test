import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glws")
export default class GlwController {
  @operation({
    summary: "Get Glws",
  })
  @get()
  static getGlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glw",
  })
  @post("{id}")
  static createGlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
