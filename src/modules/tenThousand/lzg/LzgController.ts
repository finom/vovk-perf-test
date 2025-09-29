import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzgs")
export default class LzgController {
  @operation({
    summary: "Get Lzgs",
  })
  @get()
  static getLzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzg",
  })
  @post("{id}")
  static createLzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
