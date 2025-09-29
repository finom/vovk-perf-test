import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hles")
export default class HleController {
  @operation({
    summary: "Get Hles",
  })
  @get()
  static getHles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hle",
  })
  @post("{id}")
  static createHle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
