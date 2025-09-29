import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwies")
export default class BwyController {
  @operation({
    summary: "Get Bwies",
  })
  @get()
  static getBwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwy",
  })
  @post("{id}")
  static createBwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
