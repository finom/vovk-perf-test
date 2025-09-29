import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzws")
export default class LzwController {
  @operation({
    summary: "Get Lzws",
  })
  @get()
  static getLzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzw",
  })
  @post("{id}")
  static createLzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
