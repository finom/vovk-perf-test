import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jajs")
export default class JajController {
  @operation({
    summary: "Get Jajs",
  })
  @get()
  static getJajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaj",
  })
  @post("{id}")
  static createJaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
