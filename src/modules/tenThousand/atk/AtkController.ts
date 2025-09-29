import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atks")
export default class AtkController {
  @operation({
    summary: "Get Atks",
  })
  @get()
  static getAtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atk",
  })
  @post("{id}")
  static createAtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
