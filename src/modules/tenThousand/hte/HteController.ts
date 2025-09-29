import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htes")
export default class HteController {
  @operation({
    summary: "Get Htes",
  })
  @get()
  static getHtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hte",
  })
  @post("{id}")
  static createHte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
