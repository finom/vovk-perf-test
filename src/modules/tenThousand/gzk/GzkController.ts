import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzks")
export default class GzkController {
  @operation({
    summary: "Get Gzks",
  })
  @get()
  static getGzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzk",
  })
  @post("{id}")
  static createGzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
