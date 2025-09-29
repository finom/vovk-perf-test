import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhts")
export default class BhtController {
  @operation({
    summary: "Get Bhts",
  })
  @get()
  static getBhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bht",
  })
  @post("{id}")
  static createBht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
