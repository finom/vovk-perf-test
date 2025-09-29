import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ervs")
export default class ErvController {
  @operation({
    summary: "Get Ervs",
  })
  @get()
  static getErvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erv",
  })
  @post("{id}")
  static createErv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
