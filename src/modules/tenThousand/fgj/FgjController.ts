import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgjs")
export default class FgjController {
  @operation({
    summary: "Get Fgjs",
  })
  @get()
  static getFgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgj",
  })
  @post("{id}")
  static createFgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
