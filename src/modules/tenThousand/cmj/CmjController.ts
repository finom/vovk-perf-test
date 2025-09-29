import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmjs")
export default class CmjController {
  @operation({
    summary: "Get Cmjs",
  })
  @get()
  static getCmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmj",
  })
  @post("{id}")
  static createCmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
