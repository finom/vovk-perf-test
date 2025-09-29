import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwqs")
export default class HwqController {
  @operation({
    summary: "Get Hwqs",
  })
  @get()
  static getHwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwq",
  })
  @post("{id}")
  static createHwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
