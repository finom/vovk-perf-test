import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxfs")
export default class MxfController {
  @operation({
    summary: "Get Mxfs",
  })
  @get()
  static getMxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxf",
  })
  @post("{id}")
  static createMxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
