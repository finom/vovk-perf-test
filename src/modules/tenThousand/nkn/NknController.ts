import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkns")
export default class NknController {
  @operation({
    summary: "Get Nkns",
  })
  @get()
  static getNkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkn",
  })
  @post("{id}")
  static createNkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
