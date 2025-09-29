import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkjs")
export default class KkjController {
  @operation({
    summary: "Get Kkjs",
  })
  @get()
  static getKkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkj",
  })
  @post("{id}")
  static createKkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
