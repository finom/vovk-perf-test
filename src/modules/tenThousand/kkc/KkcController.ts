import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkcs")
export default class KkcController {
  @operation({
    summary: "Get Kkcs",
  })
  @get()
  static getKkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkc",
  })
  @post("{id}")
  static createKkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
