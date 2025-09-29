import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anks")
export default class AnkController {
  @operation({
    summary: "Get Anks",
  })
  @get()
  static getAnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ank",
  })
  @post("{id}")
  static createAnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
