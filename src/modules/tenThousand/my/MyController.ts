import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mies")
export default class MyController {
  @operation({
    summary: "Get Mies",
  })
  @get()
  static getMies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create My",
  })
  @post("{id}")
  static createMy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
