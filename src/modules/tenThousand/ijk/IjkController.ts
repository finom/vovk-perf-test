import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijks")
export default class IjkController {
  @operation({
    summary: "Get Ijks",
  })
  @get()
  static getIjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijk",
  })
  @post("{id}")
  static createIjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
