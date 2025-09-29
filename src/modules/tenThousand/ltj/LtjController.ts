import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltjs")
export default class LtjController {
  @operation({
    summary: "Get Ltjs",
  })
  @get()
  static getLtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltj",
  })
  @post("{id}")
  static createLtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
