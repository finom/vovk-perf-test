import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atrs")
export default class AtrController {
  @operation({
    summary: "Get Atrs",
  })
  @get()
  static getAtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atr",
  })
  @post("{id}")
  static createAtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
