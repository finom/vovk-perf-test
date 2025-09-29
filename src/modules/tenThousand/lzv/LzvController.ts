import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzvs")
export default class LzvController {
  @operation({
    summary: "Get Lzvs",
  })
  @get()
  static getLzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzv",
  })
  @post("{id}")
  static createLzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
