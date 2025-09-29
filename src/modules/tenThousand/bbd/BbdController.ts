import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbds")
export default class BbdController {
  @operation({
    summary: "Get Bbds",
  })
  @get()
  static getBbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbd",
  })
  @post("{id}")
  static createBbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
