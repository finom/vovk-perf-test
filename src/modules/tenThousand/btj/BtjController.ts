import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btjs")
export default class BtjController {
  @operation({
    summary: "Get Btjs",
  })
  @get()
  static getBtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btj",
  })
  @post("{id}")
  static createBtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
