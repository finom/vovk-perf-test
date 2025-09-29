import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcjs")
export default class FcjController {
  @operation({
    summary: "Get Fcjs",
  })
  @get()
  static getFcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcj",
  })
  @post("{id}")
  static createFcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
