import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhrs")
export default class MhrController {
  @operation({
    summary: "Get Mhrs",
  })
  @get()
  static getMhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhr",
  })
  @post("{id}")
  static createMhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
