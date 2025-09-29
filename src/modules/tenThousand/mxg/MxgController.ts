import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxgs")
export default class MxgController {
  @operation({
    summary: "Get Mxgs",
  })
  @get()
  static getMxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxg",
  })
  @post("{id}")
  static createMxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
