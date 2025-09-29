import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glqs")
export default class GlqController {
  @operation({
    summary: "Get Glqs",
  })
  @get()
  static getGlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glq",
  })
  @post("{id}")
  static createGlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
