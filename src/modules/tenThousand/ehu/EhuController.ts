import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehus")
export default class EhuController {
  @operation({
    summary: "Get Ehus",
  })
  @get()
  static getEhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehu",
  })
  @post("{id}")
  static createEhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
