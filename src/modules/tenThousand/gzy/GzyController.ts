import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzies")
export default class GzyController {
  @operation({
    summary: "Get Gzies",
  })
  @get()
  static getGzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzy",
  })
  @post("{id}")
  static createGzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
