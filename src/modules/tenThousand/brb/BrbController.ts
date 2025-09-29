import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brbs")
export default class BrbController {
  @operation({
    summary: "Get Brbs",
  })
  @get()
  static getBrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brb",
  })
  @post("{id}")
  static createBrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
