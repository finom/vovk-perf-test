import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btns")
export default class BtnController {
  @operation({
    summary: "Get Btns",
  })
  @get()
  static getBtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btn",
  })
  @post("{id}")
  static createBtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
