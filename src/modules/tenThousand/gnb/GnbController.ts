import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnbs")
export default class GnbController {
  @operation({
    summary: "Get Gnbs",
  })
  @get()
  static getGnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnb",
  })
  @post("{id}")
  static createGnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
