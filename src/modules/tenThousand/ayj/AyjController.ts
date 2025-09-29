import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayjs")
export default class AyjController {
  @operation({
    summary: "Get Ayjs",
  })
  @get()
  static getAyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayj",
  })
  @post("{id}")
  static createAyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
