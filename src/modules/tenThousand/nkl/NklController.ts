import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkls")
export default class NklController {
  @operation({
    summary: "Get Nkls",
  })
  @get()
  static getNkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkl",
  })
  @post("{id}")
  static createNkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
