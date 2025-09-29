import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpes")
export default class JpeController {
  @operation({
    summary: "Get Jpes",
  })
  @get()
  static getJpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpe",
  })
  @post("{id}")
  static createJpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
