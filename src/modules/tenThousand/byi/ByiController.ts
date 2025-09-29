import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byis")
export default class ByiController {
  @operation({
    summary: "Get Byis",
  })
  @get()
  static getByis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byi",
  })
  @post("{id}")
  static createByi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
