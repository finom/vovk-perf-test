import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dics")
export default class DicController {
  @operation({
    summary: "Get Dics",
  })
  @get()
  static getDics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dic",
  })
  @post("{id}")
  static createDic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
