import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfbs")
export default class GfbController {
  @operation({
    summary: "Get Gfbs",
  })
  @get()
  static getGfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfb",
  })
  @post("{id}")
  static createGfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
