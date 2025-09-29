import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqus")
export default class DquController {
  @operation({
    summary: "Get Dqus",
  })
  @get()
  static getDqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqu",
  })
  @post("{id}")
  static createDqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
