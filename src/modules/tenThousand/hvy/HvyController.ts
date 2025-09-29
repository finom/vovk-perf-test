import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvies")
export default class HvyController {
  @operation({
    summary: "Get Hvies",
  })
  @get()
  static getHvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvy",
  })
  @post("{id}")
  static createHvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
