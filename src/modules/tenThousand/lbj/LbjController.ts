import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbjs")
export default class LbjController {
  @operation({
    summary: "Get Lbjs",
  })
  @get()
  static getLbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbj",
  })
  @post("{id}")
  static createLbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
