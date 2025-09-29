import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbjs")
export default class HbjController {
  @operation({
    summary: "Get Hbjs",
  })
  @get()
  static getHbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbj",
  })
  @post("{id}")
  static createHbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
