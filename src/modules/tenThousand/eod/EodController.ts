import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eods")
export default class EodController {
  @operation({
    summary: "Get Eods",
  })
  @get()
  static getEods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eod",
  })
  @post("{id}")
  static createEod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
