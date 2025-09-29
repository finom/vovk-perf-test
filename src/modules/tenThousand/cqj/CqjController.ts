import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqjs")
export default class CqjController {
  @operation({
    summary: "Get Cqjs",
  })
  @get()
  static getCqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqj",
  })
  @post("{id}")
  static createCqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
