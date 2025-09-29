import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfks")
export default class GfkController {
  @operation({
    summary: "Get Gfks",
  })
  @get()
  static getGfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfk",
  })
  @post("{id}")
  static createGfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
