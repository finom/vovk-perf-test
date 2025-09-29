import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqzs")
export default class CqzController {
  @operation({
    summary: "Get Cqzs",
  })
  @get()
  static getCqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqz",
  })
  @post("{id}")
  static createCqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
