import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcrs")
export default class BcrController {
  @operation({
    summary: "Get Bcrs",
  })
  @get()
  static getBcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcr",
  })
  @post("{id}")
  static createBcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
