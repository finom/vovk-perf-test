import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzks")
export default class LzkController {
  @operation({
    summary: "Get Lzks",
  })
  @get()
  static getLzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzk",
  })
  @post("{id}")
  static createLzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
