import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aces")
export default class AceController {
  @operation({
    summary: "Get Aces",
  })
  @get()
  static getAces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ace",
  })
  @post("{id}")
  static createAce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
