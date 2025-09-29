import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxls")
export default class MxlController {
  @operation({
    summary: "Get Mxls",
  })
  @get()
  static getMxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxl",
  })
  @post("{id}")
  static createMxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
