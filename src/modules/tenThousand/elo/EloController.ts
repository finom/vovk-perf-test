import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elos")
export default class EloController {
  @operation({
    summary: "Get Elos",
  })
  @get()
  static getElos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elo",
  })
  @post("{id}")
  static createElo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
