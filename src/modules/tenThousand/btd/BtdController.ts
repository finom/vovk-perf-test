import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btds")
export default class BtdController {
  @operation({
    summary: "Get Btds",
  })
  @get()
  static getBtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btd",
  })
  @post("{id}")
  static createBtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
