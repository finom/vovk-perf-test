import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzhs")
export default class LzhController {
  @operation({
    summary: "Get Lzhs",
  })
  @get()
  static getLzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzh",
  })
  @post("{id}")
  static createLzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
