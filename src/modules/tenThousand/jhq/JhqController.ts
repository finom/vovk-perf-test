import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhqs")
export default class JhqController {
  @operation({
    summary: "Get Jhqs",
  })
  @get()
  static getJhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhq",
  })
  @post("{id}")
  static createJhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
