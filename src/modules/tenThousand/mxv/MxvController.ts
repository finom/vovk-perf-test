import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxvs")
export default class MxvController {
  @operation({
    summary: "Get Mxvs",
  })
  @get()
  static getMxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxv",
  })
  @post("{id}")
  static createMxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
