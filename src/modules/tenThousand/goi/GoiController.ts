import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gois")
export default class GoiController {
  @operation({
    summary: "Get Gois",
  })
  @get()
  static getGois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goi",
  })
  @post("{id}")
  static createGoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
