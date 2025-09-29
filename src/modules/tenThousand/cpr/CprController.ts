import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cprs")
export default class CprController {
  @operation({
    summary: "Get Cprs",
  })
  @get()
  static getCprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpr",
  })
  @post("{id}")
  static createCpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
