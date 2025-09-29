import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpes")
export default class GpeController {
  @operation({
    summary: "Get Gpes",
  })
  @get()
  static getGpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpe",
  })
  @post("{id}")
  static createGpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
