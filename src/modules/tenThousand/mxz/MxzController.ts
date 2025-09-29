import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxzs")
export default class MxzController {
  @operation({
    summary: "Get Mxzs",
  })
  @get()
  static getMxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxz",
  })
  @post("{id}")
  static createMxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
