import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkcs")
export default class BkcController {
  @operation({
    summary: "Get Bkcs",
  })
  @get()
  static getBkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkc",
  })
  @post("{id}")
  static createBkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
