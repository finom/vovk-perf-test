import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkbs")
export default class NkbController {
  @operation({
    summary: "Get Nkbs",
  })
  @get()
  static getNkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkb",
  })
  @post("{id}")
  static createNkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
