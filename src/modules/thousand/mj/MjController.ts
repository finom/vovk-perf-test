import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjs")
export default class MjController {
  @operation({
    summary: "Get Mjs",
  })
  @get()
  static getMjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mj",
  })
  @post("{id}")
  static createMj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
