import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghies")
export default class GhyController {
  @operation({
    summary: "Get Ghies",
  })
  @get()
  static getGhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghy",
  })
  @post("{id}")
  static createGhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
