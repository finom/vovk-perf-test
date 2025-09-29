import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldrs")
export default class LdrController {
  @operation({
    summary: "Get Ldrs",
  })
  @get()
  static getLdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldr",
  })
  @post("{id}")
  static createLdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
