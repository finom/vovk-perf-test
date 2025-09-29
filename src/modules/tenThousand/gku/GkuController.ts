import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkus")
export default class GkuController {
  @operation({
    summary: "Get Gkus",
  })
  @get()
  static getGkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gku",
  })
  @post("{id}")
  static createGku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
