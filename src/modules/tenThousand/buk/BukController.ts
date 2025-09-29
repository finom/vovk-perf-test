import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buks")
export default class BukController {
  @operation({
    summary: "Get Buks",
  })
  @get()
  static getBuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buk",
  })
  @post("{id}")
  static createBuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
