import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyqs")
export default class JyqController {
  @operation({
    summary: "Get Jyqs",
  })
  @get()
  static getJyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyq",
  })
  @post("{id}")
  static createJyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
