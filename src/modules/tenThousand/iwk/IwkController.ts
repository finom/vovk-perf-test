import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwks")
export default class IwkController {
  @operation({
    summary: "Get Iwks",
  })
  @get()
  static getIwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwk",
  })
  @post("{id}")
  static createIwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
