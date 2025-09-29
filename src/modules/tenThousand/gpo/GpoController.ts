import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpos")
export default class GpoController {
  @operation({
    summary: "Get Gpos",
  })
  @get()
  static getGpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpo",
  })
  @post("{id}")
  static createGpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
