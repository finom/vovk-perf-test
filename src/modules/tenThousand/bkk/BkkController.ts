import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkks")
export default class BkkController {
  @operation({
    summary: "Get Bkks",
  })
  @get()
  static getBkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkk",
  })
  @post("{id}")
  static createBkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
