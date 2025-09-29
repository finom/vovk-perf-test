import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzls")
export default class BzlController {
  @operation({
    summary: "Get Bzls",
  })
  @get()
  static getBzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzl",
  })
  @post("{id}")
  static createBzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
