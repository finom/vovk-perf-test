import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzls")
export default class LzlController {
  @operation({
    summary: "Get Lzls",
  })
  @get()
  static getLzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzl",
  })
  @post("{id}")
  static createLzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
