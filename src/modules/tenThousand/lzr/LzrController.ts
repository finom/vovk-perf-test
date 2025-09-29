import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzrs")
export default class LzrController {
  @operation({
    summary: "Get Lzrs",
  })
  @get()
  static getLzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzr",
  })
  @post("{id}")
  static createLzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
