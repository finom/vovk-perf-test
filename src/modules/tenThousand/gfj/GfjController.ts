import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfjs")
export default class GfjController {
  @operation({
    summary: "Get Gfjs",
  })
  @get()
  static getGfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfj",
  })
  @post("{id}")
  static createGfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
