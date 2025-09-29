import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eves")
export default class EveController {
  @operation({
    summary: "Get Eves",
  })
  @get()
  static getEves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eve",
  })
  @post("{id}")
  static createEve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
