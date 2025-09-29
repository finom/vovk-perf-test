import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxms")
export default class MxmController {
  @operation({
    summary: "Get Mxms",
  })
  @get()
  static getMxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxm",
  })
  @post("{id}")
  static createMxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
