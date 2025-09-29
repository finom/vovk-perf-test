import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfvs")
export default class GfvController {
  @operation({
    summary: "Get Gfvs",
  })
  @get()
  static getGfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfv",
  })
  @post("{id}")
  static createGfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
