import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbqs")
export default class HbqController {
  @operation({
    summary: "Get Hbqs",
  })
  @get()
  static getHbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbq",
  })
  @post("{id}")
  static createHbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
