import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxs")
export default class MxsController {
  @operation({
    summary: "Get Mxs",
  })
  @get()
  static getMxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxs",
  })
  @post("{id}")
  static createMxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
