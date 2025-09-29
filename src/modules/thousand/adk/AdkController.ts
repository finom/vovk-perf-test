import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adks")
export default class AdkController {
  @operation({
    summary: "Get Adks",
  })
  @get()
  static getAdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adk",
  })
  @post("{id}")
  static createAdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
