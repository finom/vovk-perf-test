import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfhs")
export default class GfhController {
  @operation({
    summary: "Get Gfhs",
  })
  @get()
  static getGfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfh",
  })
  @post("{id}")
  static createGfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
