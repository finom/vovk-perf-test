import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgns")
export default class HgnController {
  @operation({
    summary: "Get Hgns",
  })
  @get()
  static getHgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgn",
  })
  @post("{id}")
  static createHgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
