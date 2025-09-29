import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxws")
export default class MxwController {
  @operation({
    summary: "Get Mxws",
  })
  @get()
  static getMxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxw",
  })
  @post("{id}")
  static createMxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
