import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfqs")
export default class DfqController {
  @operation({
    summary: "Get Dfqs",
  })
  @get()
  static getDfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfq",
  })
  @post("{id}")
  static createDfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
