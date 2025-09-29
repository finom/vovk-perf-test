import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkbs")
export default class BkbController {
  @operation({
    summary: "Get Bkbs",
  })
  @get()
  static getBkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkb",
  })
  @post("{id}")
  static createBkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
