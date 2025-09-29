import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbms")
export default class BbmController {
  @operation({
    summary: "Get Bbms",
  })
  @get()
  static getBbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbm",
  })
  @post("{id}")
  static createBbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
