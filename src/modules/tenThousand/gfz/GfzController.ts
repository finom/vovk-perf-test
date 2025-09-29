import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfzs")
export default class GfzController {
  @operation({
    summary: "Get Gfzs",
  })
  @get()
  static getGfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfz",
  })
  @post("{id}")
  static createGfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
