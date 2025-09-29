import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eats")
export default class EatController {
  @operation({
    summary: "Get Eats",
  })
  @get()
  static getEats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eat",
  })
  @post("{id}")
  static createEat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
