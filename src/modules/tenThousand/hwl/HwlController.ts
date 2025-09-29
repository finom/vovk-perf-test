import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwls")
export default class HwlController {
  @operation({
    summary: "Get Hwls",
  })
  @get()
  static getHwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwl",
  })
  @post("{id}")
  static createHwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
