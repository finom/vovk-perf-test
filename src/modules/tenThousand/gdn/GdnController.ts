import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdns")
export default class GdnController {
  @operation({
    summary: "Get Gdns",
  })
  @get()
  static getGdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdn",
  })
  @post("{id}")
  static createGdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
