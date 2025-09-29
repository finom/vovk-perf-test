import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggws")
export default class GgwController {
  @operation({
    summary: "Get Ggws",
  })
  @get()
  static getGgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggw",
  })
  @post("{id}")
  static createGgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
