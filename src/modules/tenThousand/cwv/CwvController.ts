import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwvs")
export default class CwvController {
  @operation({
    summary: "Get Cwvs",
  })
  @get()
  static getCwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwv",
  })
  @post("{id}")
  static createCwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
