import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eggs")
export default class EggController {
  @operation({
    summary: "Get Eggs",
  })
  @get()
  static getEggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egg",
  })
  @post("{id}")
  static createEgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
