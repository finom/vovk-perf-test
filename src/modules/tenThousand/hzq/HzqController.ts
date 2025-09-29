import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzqs")
export default class HzqController {
  @operation({
    summary: "Get Hzqs",
  })
  @get()
  static getHzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzq",
  })
  @post("{id}")
  static createHzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
