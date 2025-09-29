import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzps")
export default class LzpController {
  @operation({
    summary: "Get Lzps",
  })
  @get()
  static getLzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzp",
  })
  @post("{id}")
  static createLzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
