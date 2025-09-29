import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flgs")
export default class FlgController {
  @operation({
    summary: "Get Flgs",
  })
  @get()
  static getFlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flg",
  })
  @post("{id}")
  static createFlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
