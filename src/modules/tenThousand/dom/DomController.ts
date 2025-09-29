import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doms")
export default class DomController {
  @operation({
    summary: "Get Doms",
  })
  @get()
  static getDoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dom",
  })
  @post("{id}")
  static createDom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
