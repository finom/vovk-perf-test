import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfus")
export default class GfuController {
  @operation({
    summary: "Get Gfus",
  })
  @get()
  static getGfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfu",
  })
  @post("{id}")
  static createGfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
