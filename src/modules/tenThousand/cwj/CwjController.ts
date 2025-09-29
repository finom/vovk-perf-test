import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwjs")
export default class CwjController {
  @operation({
    summary: "Get Cwjs",
  })
  @get()
  static getCwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwj",
  })
  @post("{id}")
  static createCwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
