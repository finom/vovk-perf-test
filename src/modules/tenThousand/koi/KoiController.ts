import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kois")
export default class KoiController {
  @operation({
    summary: "Get Kois",
  })
  @get()
  static getKois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koi",
  })
  @post("{id}")
  static createKoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
