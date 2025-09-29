import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gprs")
export default class GprController {
  @operation({
    summary: "Get Gprs",
  })
  @get()
  static getGprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpr",
  })
  @post("{id}")
  static createGpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
