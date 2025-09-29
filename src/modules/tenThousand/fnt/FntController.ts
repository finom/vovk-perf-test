import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnts")
export default class FntController {
  @operation({
    summary: "Get Fnts",
  })
  @get()
  static getFnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnt",
  })
  @post("{id}")
  static createFnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
