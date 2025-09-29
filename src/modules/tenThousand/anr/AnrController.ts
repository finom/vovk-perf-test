import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anrs")
export default class AnrController {
  @operation({
    summary: "Get Anrs",
  })
  @get()
  static getAnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anr",
  })
  @post("{id}")
  static createAnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
