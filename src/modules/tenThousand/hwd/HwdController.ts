import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwds")
export default class HwdController {
  @operation({
    summary: "Get Hwds",
  })
  @get()
  static getHwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwd",
  })
  @post("{id}")
  static createHwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
