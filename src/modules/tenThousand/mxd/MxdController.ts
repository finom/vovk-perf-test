import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxds")
export default class MxdController {
  @operation({
    summary: "Get Mxds",
  })
  @get()
  static getMxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxd",
  })
  @post("{id}")
  static createMxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
