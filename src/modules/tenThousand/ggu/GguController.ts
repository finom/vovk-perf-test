import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggus")
export default class GguController {
  @operation({
    summary: "Get Ggus",
  })
  @get()
  static getGgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggu",
  })
  @post("{id}")
  static createGgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
