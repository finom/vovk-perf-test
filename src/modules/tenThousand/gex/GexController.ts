import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gexes")
export default class GexController {
  @operation({
    summary: "Get Gexes",
  })
  @get()
  static getGexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gex",
  })
  @post("{id}")
  static createGex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
