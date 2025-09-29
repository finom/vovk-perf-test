import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mozs")
export default class MozController {
  @operation({
    summary: "Get Mozs",
  })
  @get()
  static getMozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moz",
  })
  @post("{id}")
  static createMoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
