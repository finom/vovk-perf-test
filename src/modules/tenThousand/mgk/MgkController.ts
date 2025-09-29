import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgks")
export default class MgkController {
  @operation({
    summary: "Get Mgks",
  })
  @get()
  static getMgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgk",
  })
  @post("{id}")
  static createMgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
