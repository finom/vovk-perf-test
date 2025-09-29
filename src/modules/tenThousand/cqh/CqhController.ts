import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqhs")
export default class CqhController {
  @operation({
    summary: "Get Cqhs",
  })
  @get()
  static getCqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqh",
  })
  @post("{id}")
  static createCqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
