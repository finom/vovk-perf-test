import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzxes")
export default class LzxController {
  @operation({
    summary: "Get Lzxes",
  })
  @get()
  static getLzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzx",
  })
  @post("{id}")
  static createLzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
