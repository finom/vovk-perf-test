import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkxes")
export default class BkxController {
  @operation({
    summary: "Get Bkxes",
  })
  @get()
  static getBkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkx",
  })
  @post("{id}")
  static createBkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
