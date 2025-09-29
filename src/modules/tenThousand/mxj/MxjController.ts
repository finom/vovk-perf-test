import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxjs")
export default class MxjController {
  @operation({
    summary: "Get Mxjs",
  })
  @get()
  static getMxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxj",
  })
  @post("{id}")
  static createMxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
