import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwxes")
export default class HwxController {
  @operation({
    summary: "Get Hwxes",
  })
  @get()
  static getHwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwx",
  })
  @post("{id}")
  static createHwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
