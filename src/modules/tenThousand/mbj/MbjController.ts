import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbjs")
export default class MbjController {
  @operation({
    summary: "Get Mbjs",
  })
  @get()
  static getMbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbj",
  })
  @post("{id}")
  static createMbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
