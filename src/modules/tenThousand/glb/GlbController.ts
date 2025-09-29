import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glbs")
export default class GlbController {
  @operation({
    summary: "Get Glbs",
  })
  @get()
  static getGlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glb",
  })
  @post("{id}")
  static createGlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
