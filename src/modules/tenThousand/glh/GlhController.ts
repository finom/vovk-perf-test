import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glhs")
export default class GlhController {
  @operation({
    summary: "Get Glhs",
  })
  @get()
  static getGlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glh",
  })
  @post("{id}")
  static createGlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
