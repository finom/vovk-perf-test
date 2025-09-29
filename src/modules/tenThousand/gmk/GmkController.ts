import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmks")
export default class GmkController {
  @operation({
    summary: "Get Gmks",
  })
  @get()
  static getGmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmk",
  })
  @post("{id}")
  static createGmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
