import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzqs")
export default class LzqController {
  @operation({
    summary: "Get Lzqs",
  })
  @get()
  static getLzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzq",
  })
  @post("{id}")
  static createLzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
