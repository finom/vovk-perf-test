import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfqs")
export default class GfqController {
  @operation({
    summary: "Get Gfqs",
  })
  @get()
  static getGfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfq",
  })
  @post("{id}")
  static createGfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
