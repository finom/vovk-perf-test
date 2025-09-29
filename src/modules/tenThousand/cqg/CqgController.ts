import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqgs")
export default class CqgController {
  @operation({
    summary: "Get Cqgs",
  })
  @get()
  static getCqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqg",
  })
  @post("{id}")
  static createCqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
