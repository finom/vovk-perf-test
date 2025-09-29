import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpes")
export default class HpeController {
  @operation({
    summary: "Get Hpes",
  })
  @get()
  static getHpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpe",
  })
  @post("{id}")
  static createHpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
