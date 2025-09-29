import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfps")
export default class GfpController {
  @operation({
    summary: "Get Gfps",
  })
  @get()
  static getGfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfp",
  })
  @post("{id}")
  static createGfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
