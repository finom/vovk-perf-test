import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkns")
export default class KknController {
  @operation({
    summary: "Get Kkns",
  })
  @get()
  static getKkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkn",
  })
  @post("{id}")
  static createKkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
