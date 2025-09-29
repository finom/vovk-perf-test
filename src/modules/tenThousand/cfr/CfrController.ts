import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfrs")
export default class CfrController {
  @operation({
    summary: "Get Cfrs",
  })
  @get()
  static getCfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfr",
  })
  @post("{id}")
  static createCfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
