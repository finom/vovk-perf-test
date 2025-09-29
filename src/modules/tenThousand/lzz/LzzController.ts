import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzzes")
export default class LzzController {
  @operation({
    summary: "Get Lzzes",
  })
  @get()
  static getLzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzz",
  })
  @post("{id}")
  static createLzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
