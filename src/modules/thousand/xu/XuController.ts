import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xus")
export default class XuController {
  @operation({
    summary: "Get Xus",
  })
  @get()
  static getXus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xu",
  })
  @post("{id}")
  static createXu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
