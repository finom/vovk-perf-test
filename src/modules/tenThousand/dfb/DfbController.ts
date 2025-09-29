import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfbs")
export default class DfbController {
  @operation({
    summary: "Get Dfbs",
  })
  @get()
  static getDfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfb",
  })
  @post("{id}")
  static createDfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
