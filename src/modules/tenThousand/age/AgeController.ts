import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ages")
export default class AgeController {
  @operation({
    summary: "Get Ages",
  })
  @get()
  static getAges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Age",
  })
  @post("{id}")
  static createAge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
