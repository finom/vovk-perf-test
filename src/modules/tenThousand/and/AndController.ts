import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ands")
export default class AndController {
  @operation({
    summary: "Get Ands",
  })
  @get()
  static getAnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create And",
  })
  @post("{id}")
  static createAnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
