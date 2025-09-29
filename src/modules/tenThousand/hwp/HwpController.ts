import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwps")
export default class HwpController {
  @operation({
    summary: "Get Hwps",
  })
  @get()
  static getHwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwp",
  })
  @post("{id}")
  static createHwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
