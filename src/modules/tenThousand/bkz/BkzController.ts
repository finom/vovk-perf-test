import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkzs")
export default class BkzController {
  @operation({
    summary: "Get Bkzs",
  })
  @get()
  static getBkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkz",
  })
  @post("{id}")
  static createBkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
