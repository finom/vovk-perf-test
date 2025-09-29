import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxbs")
export default class MxbController {
  @operation({
    summary: "Get Mxbs",
  })
  @get()
  static getMxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxb",
  })
  @post("{id}")
  static createMxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
