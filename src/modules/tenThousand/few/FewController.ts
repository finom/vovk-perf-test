import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fews")
export default class FewController {
  @operation({
    summary: "Get Fews",
  })
  @get()
  static getFews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Few",
  })
  @post("{id}")
  static createFew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
