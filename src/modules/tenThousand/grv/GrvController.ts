import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grvs")
export default class GrvController {
  @operation({
    summary: "Get Grvs",
  })
  @get()
  static getGrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grv",
  })
  @post("{id}")
  static createGrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
