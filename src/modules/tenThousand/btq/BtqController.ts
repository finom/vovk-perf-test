import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btqs")
export default class BtqController {
  @operation({
    summary: "Get Btqs",
  })
  @get()
  static getBtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btq",
  })
  @post("{id}")
  static createBtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
