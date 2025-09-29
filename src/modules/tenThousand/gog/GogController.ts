import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gogs")
export default class GogController {
  @operation({
    summary: "Get Gogs",
  })
  @get()
  static getGogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gog",
  })
  @post("{id}")
  static createGog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
