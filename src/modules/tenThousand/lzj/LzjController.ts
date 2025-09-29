import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzjs")
export default class LzjController {
  @operation({
    summary: "Get Lzjs",
  })
  @get()
  static getLzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzj",
  })
  @post("{id}")
  static createLzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
