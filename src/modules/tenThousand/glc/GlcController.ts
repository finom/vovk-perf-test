import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glcs")
export default class GlcController {
  @operation({
    summary: "Get Glcs",
  })
  @get()
  static getGlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glc",
  })
  @post("{id}")
  static createGlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
