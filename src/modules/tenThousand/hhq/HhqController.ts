import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhqs")
export default class HhqController {
  @operation({
    summary: "Get Hhqs",
  })
  @get()
  static getHhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhq",
  })
  @post("{id}")
  static createHhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
