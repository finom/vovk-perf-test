import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlts")
export default class DltController {
  @operation({
    summary: "Get Dlts",
  })
  @get()
  static getDlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlt",
  })
  @post("{id}")
  static createDlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
