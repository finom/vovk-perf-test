import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzvs")
export default class GzvController {
  @operation({
    summary: "Get Gzvs",
  })
  @get()
  static getGzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzv",
  })
  @post("{id}")
  static createGzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
