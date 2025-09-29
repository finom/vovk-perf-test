import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrus")
export default class LruController {
  @operation({
    summary: "Get Lrus",
  })
  @get()
  static getLrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lru",
  })
  @post("{id}")
  static createLru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
