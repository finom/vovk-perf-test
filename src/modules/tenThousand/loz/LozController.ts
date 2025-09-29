import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lozs")
export default class LozController {
  @operation({
    summary: "Get Lozs",
  })
  @get()
  static getLozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loz",
  })
  @post("{id}")
  static createLoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
