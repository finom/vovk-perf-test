import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkns")
export default class BknController {
  @operation({
    summary: "Get Bkns",
  })
  @get()
  static getBkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkn",
  })
  @post("{id}")
  static createBkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
