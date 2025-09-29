import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alls")
export default class AllController {
  @operation({
    summary: "Get Alls",
  })
  @get()
  static getAlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create All",
  })
  @post("{id}")
  static createAll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
