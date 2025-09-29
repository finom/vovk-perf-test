import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkbs")
export default class DkbController {
  @operation({
    summary: "Get Dkbs",
  })
  @get()
  static getDkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkb",
  })
  @post("{id}")
  static createDkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
