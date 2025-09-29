import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzbs")
export default class LzbController {
  @operation({
    summary: "Get Lzbs",
  })
  @get()
  static getLzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzb",
  })
  @post("{id}")
  static createLzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
