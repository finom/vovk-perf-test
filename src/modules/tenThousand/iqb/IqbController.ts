import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqbs")
export default class IqbController {
  @operation({
    summary: "Get Iqbs",
  })
  @get()
  static getIqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqb",
  })
  @post("{id}")
  static createIqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
