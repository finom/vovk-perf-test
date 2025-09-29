import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwvs")
export default class HwvController {
  @operation({
    summary: "Get Hwvs",
  })
  @get()
  static getHwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwv",
  })
  @post("{id}")
  static createHwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
