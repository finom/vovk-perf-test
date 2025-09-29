import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfjs")
export default class MfjController {
  @operation({
    summary: "Get Mfjs",
  })
  @get()
  static getMfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfj",
  })
  @post("{id}")
  static createMfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
