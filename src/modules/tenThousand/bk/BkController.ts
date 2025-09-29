import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bks")
export default class BkController {
  @operation({
    summary: "Get Bks",
  })
  @get()
  static getBks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bk",
  })
  @post("{id}")
  static createBk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
