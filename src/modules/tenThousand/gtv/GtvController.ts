import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtvs")
export default class GtvController {
  @operation({
    summary: "Get Gtvs",
  })
  @get()
  static getGtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtv",
  })
  @post("{id}")
  static createGtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
