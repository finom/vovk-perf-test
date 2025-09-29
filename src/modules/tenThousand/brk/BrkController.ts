import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brks")
export default class BrkController {
  @operation({
    summary: "Get Brks",
  })
  @get()
  static getBrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brk",
  })
  @post("{id}")
  static createBrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
