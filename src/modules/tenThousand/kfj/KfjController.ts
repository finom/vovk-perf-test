import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfjs")
export default class KfjController {
  @operation({
    summary: "Get Kfjs",
  })
  @get()
  static getKfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfj",
  })
  @post("{id}")
  static createKfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
