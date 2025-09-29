import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iexes")
export default class IexController {
  @operation({
    summary: "Get Iexes",
  })
  @get()
  static getIexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iex",
  })
  @post("{id}")
  static createIex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
