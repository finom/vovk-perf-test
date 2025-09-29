import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfms")
export default class GfmController {
  @operation({
    summary: "Get Gfms",
  })
  @get()
  static getGfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfm",
  })
  @post("{id}")
  static createGfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
