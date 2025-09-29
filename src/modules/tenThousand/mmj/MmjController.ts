import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmjs")
export default class MmjController {
  @operation({
    summary: "Get Mmjs",
  })
  @get()
  static getMmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmj",
  })
  @post("{id}")
  static createMmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
