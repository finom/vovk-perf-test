import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftns")
export default class FtnController {
  @operation({
    summary: "Get Ftns",
  })
  @get()
  static getFtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftn",
  })
  @post("{id}")
  static createFtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
