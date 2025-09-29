import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkus")
export default class BkuController {
  @operation({
    summary: "Get Bkus",
  })
  @get()
  static getBkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bku",
  })
  @post("{id}")
  static createBku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
