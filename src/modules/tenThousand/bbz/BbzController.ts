import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbzs")
export default class BbzController {
  @operation({
    summary: "Get Bbzs",
  })
  @get()
  static getBbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbz",
  })
  @post("{id}")
  static createBbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
