import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsses")
export default class BssController {
  @operation({
    summary: "Get Bsses",
  })
  @get()
  static getBsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bss",
  })
  @post("{id}")
  static createBss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
