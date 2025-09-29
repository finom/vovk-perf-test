import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amns")
export default class AmnController {
  @operation({
    summary: "Get Amns",
  })
  @get()
  static getAmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amn",
  })
  @post("{id}")
  static createAmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
