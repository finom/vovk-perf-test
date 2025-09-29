import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwfs")
export default class HwfController {
  @operation({
    summary: "Get Hwfs",
  })
  @get()
  static getHwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwf",
  })
  @post("{id}")
  static createHwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
