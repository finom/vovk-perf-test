import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtns")
export default class MtnController {
  @operation({
    summary: "Get Mtns",
  })
  @get()
  static getMtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtn",
  })
  @post("{id}")
  static createMtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
