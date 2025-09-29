import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjks")
export default class MjkController {
  @operation({
    summary: "Get Mjks",
  })
  @get()
  static getMjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjk",
  })
  @post("{id}")
  static createMjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
