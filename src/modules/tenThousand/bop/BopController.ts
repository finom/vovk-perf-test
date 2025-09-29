import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bops")
export default class BopController {
  @operation({
    summary: "Get Bops",
  })
  @get()
  static getBops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bop",
  })
  @post("{id}")
  static createBop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
