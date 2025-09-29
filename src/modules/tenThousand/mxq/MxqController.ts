import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxqs")
export default class MxqController {
  @operation({
    summary: "Get Mxqs",
  })
  @get()
  static getMxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxq",
  })
  @post("{id}")
  static createMxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
