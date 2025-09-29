import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwns")
export default class BwnController {
  @operation({
    summary: "Get Bwns",
  })
  @get()
  static getBwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwn",
  })
  @post("{id}")
  static createBwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
