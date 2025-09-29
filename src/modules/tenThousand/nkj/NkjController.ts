import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkjs")
export default class NkjController {
  @operation({
    summary: "Get Nkjs",
  })
  @get()
  static getNkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkj",
  })
  @post("{id}")
  static createNkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
