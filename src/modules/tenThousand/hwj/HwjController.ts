import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwjs")
export default class HwjController {
  @operation({
    summary: "Get Hwjs",
  })
  @get()
  static getHwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwj",
  })
  @post("{id}")
  static createHwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
