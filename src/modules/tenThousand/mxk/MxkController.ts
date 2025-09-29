import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxks")
export default class MxkController {
  @operation({
    summary: "Get Mxks",
  })
  @get()
  static getMxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxk",
  })
  @post("{id}")
  static createMxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
