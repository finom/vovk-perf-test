import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxks")
export default class GxkController {
  @operation({
    summary: "Get Gxks",
  })
  @get()
  static getGxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxk",
  })
  @post("{id}")
  static createGxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
