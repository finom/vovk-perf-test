import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbds")
export default class LbdController {
  @operation({
    summary: "Get Lbds",
  })
  @get()
  static getLbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbd",
  })
  @post("{id}")
  static createLbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
