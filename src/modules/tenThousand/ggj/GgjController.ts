import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggjs")
export default class GgjController {
  @operation({
    summary: "Get Ggjs",
  })
  @get()
  static getGgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggj",
  })
  @post("{id}")
  static createGgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
