import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtzs")
export default class GtzController {
  @operation({
    summary: "Get Gtzs",
  })
  @get()
  static getGtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtz",
  })
  @post("{id}")
  static createGtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
