import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbds")
export default class FbdController {
  @operation({
    summary: "Get Fbds",
  })
  @get()
  static getFbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbd",
  })
  @post("{id}")
  static createFbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
