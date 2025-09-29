import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkns")
export default class GknController {
  @operation({
    summary: "Get Gkns",
  })
  @get()
  static getGkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkn",
  })
  @post("{id}")
  static createGkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
