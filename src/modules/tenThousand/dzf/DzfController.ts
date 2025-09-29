import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzfs")
export default class DzfController {
  @operation({
    summary: "Get Dzfs",
  })
  @get()
  static getDzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzf",
  })
  @post("{id}")
  static createDzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
