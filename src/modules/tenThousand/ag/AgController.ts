import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ags")
export default class AgController {
  @operation({
    summary: "Get Ags",
  })
  @get()
  static getAgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ag",
  })
  @post("{id}")
  static createAg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
