import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpes")
export default class KpeController {
  @operation({
    summary: "Get Kpes",
  })
  @get()
  static getKpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpe",
  })
  @post("{id}")
  static createKpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
