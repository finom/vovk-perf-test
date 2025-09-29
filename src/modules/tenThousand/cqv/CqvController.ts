import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqvs")
export default class CqvController {
  @operation({
    summary: "Get Cqvs",
  })
  @get()
  static getCqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqv",
  })
  @post("{id}")
  static createCqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
