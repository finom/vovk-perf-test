import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hprs")
export default class HprController {
  @operation({
    summary: "Get Hprs",
  })
  @get()
  static getHprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpr",
  })
  @post("{id}")
  static createHpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
