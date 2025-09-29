import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nprs")
export default class NprController {
  @operation({
    summary: "Get Nprs",
  })
  @get()
  static getNprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npr",
  })
  @post("{id}")
  static createNpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
