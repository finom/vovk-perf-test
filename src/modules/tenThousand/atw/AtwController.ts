import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atws")
export default class AtwController {
  @operation({
    summary: "Get Atws",
  })
  @get()
  static getAtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atw",
  })
  @post("{id}")
  static createAtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
