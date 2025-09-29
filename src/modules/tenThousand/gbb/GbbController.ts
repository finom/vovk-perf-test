import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbbs")
export default class GbbController {
  @operation({
    summary: "Get Gbbs",
  })
  @get()
  static getGbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbb",
  })
  @post("{id}")
  static createGbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
