import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkjs")
export default class GkjController {
  @operation({
    summary: "Get Gkjs",
  })
  @get()
  static getGkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkj",
  })
  @post("{id}")
  static createGkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
