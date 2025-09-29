import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjjs")
export default class MjjController {
  @operation({
    summary: "Get Mjjs",
  })
  @get()
  static getMjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjj",
  })
  @post("{id}")
  static createMjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
