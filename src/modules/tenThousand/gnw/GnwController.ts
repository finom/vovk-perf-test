import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnws")
export default class GnwController {
  @operation({
    summary: "Get Gnws",
  })
  @get()
  static getGnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnw",
  })
  @post("{id}")
  static createGnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
