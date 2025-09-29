import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzns")
export default class LznController {
  @operation({
    summary: "Get Lzns",
  })
  @get()
  static getLzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzn",
  })
  @post("{id}")
  static createLzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
