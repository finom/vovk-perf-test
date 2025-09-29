import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxrs")
export default class MxrController {
  @operation({
    summary: "Get Mxrs",
  })
  @get()
  static getMxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxr",
  })
  @post("{id}")
  static createMxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
