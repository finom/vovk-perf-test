import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnks")
export default class FnkController {
  @operation({
    summary: "Get Fnks",
  })
  @get()
  static getFnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnk",
  })
  @post("{id}")
  static createFnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
