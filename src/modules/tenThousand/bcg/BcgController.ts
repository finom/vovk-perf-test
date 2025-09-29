import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcgs")
export default class BcgController {
  @operation({
    summary: "Get Bcgs",
  })
  @get()
  static getBcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcg",
  })
  @post("{id}")
  static createBcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
