import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chts")
export default class ChtController {
  @operation({
    summary: "Get Chts",
  })
  @get()
  static getChts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cht",
  })
  @post("{id}")
  static createCht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
