import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glms")
export default class GlmController {
  @operation({
    summary: "Get Glms",
  })
  @get()
  static getGlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glm",
  })
  @post("{id}")
  static createGlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
