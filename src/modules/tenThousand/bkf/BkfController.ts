import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkfs")
export default class BkfController {
  @operation({
    summary: "Get Bkfs",
  })
  @get()
  static getBkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkf",
  })
  @post("{id}")
  static createBkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
