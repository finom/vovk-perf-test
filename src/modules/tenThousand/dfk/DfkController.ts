import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfks")
export default class DfkController {
  @operation({
    summary: "Get Dfks",
  })
  @get()
  static getDfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfk",
  })
  @post("{id}")
  static createDfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
