import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzfs")
export default class LzfController {
  @operation({
    summary: "Get Lzfs",
  })
  @get()
  static getLzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzf",
  })
  @post("{id}")
  static createLzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
