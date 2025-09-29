import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glps")
export default class GlpController {
  @operation({
    summary: "Get Glps",
  })
  @get()
  static getGlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glp",
  })
  @post("{id}")
  static createGlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
