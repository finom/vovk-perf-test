import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cns")
export default class CnsController {
  @operation({
    summary: "Get Cns",
  })
  @get()
  static getCns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cns",
  })
  @post("{id}")
  static createCns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
