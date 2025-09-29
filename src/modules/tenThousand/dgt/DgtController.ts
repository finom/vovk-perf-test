import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgts")
export default class DgtController {
  @operation({
    summary: "Get Dgts",
  })
  @get()
  static getDgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgt",
  })
  @post("{id}")
  static createDgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
