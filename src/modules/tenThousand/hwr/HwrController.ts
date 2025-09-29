import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwrs")
export default class HwrController {
  @operation({
    summary: "Get Hwrs",
  })
  @get()
  static getHwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwr",
  })
  @post("{id}")
  static createHwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
