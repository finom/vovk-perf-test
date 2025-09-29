import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwps")
export default class BwpController {
  @operation({
    summary: "Get Bwps",
  })
  @get()
  static getBwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwp",
  })
  @post("{id}")
  static createBwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
