import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxps")
export default class MxpController {
  @operation({
    summary: "Get Mxps",
  })
  @get()
  static getMxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxp",
  })
  @post("{id}")
  static createMxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
