import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwls")
export default class BwlController {
  @operation({
    summary: "Get Bwls",
  })
  @get()
  static getBwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwl",
  })
  @post("{id}")
  static createBwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
