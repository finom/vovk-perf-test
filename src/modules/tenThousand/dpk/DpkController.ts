import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpks")
export default class DpkController {
  @operation({
    summary: "Get Dpks",
  })
  @get()
  static getDpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpk",
  })
  @post("{id}")
  static createDpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
