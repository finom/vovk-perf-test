import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czzes")
export default class CzzController {
  @operation({
    summary: "Get Czzes",
  })
  @get()
  static getCzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czz",
  })
  @post("{id}")
  static createCzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
