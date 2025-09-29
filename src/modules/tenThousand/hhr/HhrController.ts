import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhrs")
export default class HhrController {
  @operation({
    summary: "Get Hhrs",
  })
  @get()
  static getHhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhr",
  })
  @post("{id}")
  static createHhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
