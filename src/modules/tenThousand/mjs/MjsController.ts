import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjs")
export default class MjsController {
  @operation({
    summary: "Get Mjs",
  })
  @get()
  static getMjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjs",
  })
  @post("{id}")
  static createMjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
