import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmvs")
export default class GmvController {
  @operation({
    summary: "Get Gmvs",
  })
  @get()
  static getGmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmv",
  })
  @post("{id}")
  static createGmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
