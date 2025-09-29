import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwzs")
export default class CwzController {
  @operation({
    summary: "Get Cwzs",
  })
  @get()
  static getCwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwz",
  })
  @post("{id}")
  static createCwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
