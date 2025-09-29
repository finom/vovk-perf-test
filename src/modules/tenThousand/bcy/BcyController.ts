import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcies")
export default class BcyController {
  @operation({
    summary: "Get Bcies",
  })
  @get()
  static getBcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcy",
  })
  @post("{id}")
  static createBcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
