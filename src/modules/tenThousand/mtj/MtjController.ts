import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtjs")
export default class MtjController {
  @operation({
    summary: "Get Mtjs",
  })
  @get()
  static getMtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtj",
  })
  @post("{id}")
  static createMtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
