import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcks")
export default class KckController {
  @operation({
    summary: "Get Kcks",
  })
  @get()
  static getKcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kck",
  })
  @post("{id}")
  static createKck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
