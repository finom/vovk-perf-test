import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwes")
export default class GweController {
  @operation({
    summary: "Get Gwes",
  })
  @get()
  static getGwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwe",
  })
  @post("{id}")
  static createGwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
