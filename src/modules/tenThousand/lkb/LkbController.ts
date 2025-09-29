import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkbs")
export default class LkbController {
  @operation({
    summary: "Get Lkbs",
  })
  @get()
  static getLkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkb",
  })
  @post("{id}")
  static createLkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
