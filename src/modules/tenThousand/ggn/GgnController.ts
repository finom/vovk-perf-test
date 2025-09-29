import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggns")
export default class GgnController {
  @operation({
    summary: "Get Ggns",
  })
  @get()
  static getGgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggn",
  })
  @post("{id}")
  static createGgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
