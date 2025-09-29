import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mks")
export default class MkController {
  @operation({
    summary: "Get Mks",
  })
  @get()
  static getMks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mk",
  })
  @post("{id}")
  static createMk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
