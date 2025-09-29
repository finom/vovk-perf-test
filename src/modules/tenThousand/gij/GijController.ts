import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gijs")
export default class GijController {
  @operation({
    summary: "Get Gijs",
  })
  @get()
  static getGijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gij",
  })
  @post("{id}")
  static createGij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
