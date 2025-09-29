import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpes")
export default class BpeController {
  @operation({
    summary: "Get Bpes",
  })
  @get()
  static getBpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpe",
  })
  @post("{id}")
  static createBpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
