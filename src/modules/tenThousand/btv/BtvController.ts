import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btvs")
export default class BtvController {
  @operation({
    summary: "Get Btvs",
  })
  @get()
  static getBtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btv",
  })
  @post("{id}")
  static createBtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
